import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vfk3dfb7y.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="vfk3dfb7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:flush-curb-with-arrow-right"} {...others} />);
}

export default Component;
