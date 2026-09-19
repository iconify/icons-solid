import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbxm_vbav.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="vbxm_vbav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:broken-heart-filled"} {...others} />);
}

export default Component;
