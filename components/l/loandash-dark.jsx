import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ec9ynkbmm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ec9ynkbmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:loandash-dark"} {...others} />);
}

export default Component;
