import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/isyu6z9ux.css';
import '../../css/z/zl5x12lyi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="isyu6z9ux"/><path class="zl5x12lyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dynamodb-dashboard-light"} {...others} />);
}

export default Component;
