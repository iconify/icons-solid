import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qt8f97bci.css';
import '../../css/x/xyx_nmb3x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qt8f97bci"/><path class="xyx_nmb3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pound-20-bold"} {...others} />);
}

export default Component;
