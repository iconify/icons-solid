import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y-hyj2x6a.css';
import '../../css/f/fwl6ucbbe.css';
import '../../css/y/y4mfbjt5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="y-hyj2x6a"/><path class="fwl6ucbbe"/><path class="y4mfbjt5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:camera-automatically-01"} {...others} />);
}

export default Component;
