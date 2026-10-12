import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/epgf2xatz.css';
import '../../css/y/ys1xrmbto.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="epgf2xatz"/><path class="ys1xrmbto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:oil-can-20"} {...others} />);
}

export default Component;
