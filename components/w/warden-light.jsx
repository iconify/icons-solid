import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozfmrnbpf.css';
import '../../css/z/zu6ek4h1t.css';
import '../../css/r/rgbhf6bcm.css';

const viewBox = {"width":64,"height":77};
const content = `<g class="ozfmrnbpf"><path class="zu6ek4h1t"/><path class="rgbhf6bcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:warden-light"} {...others} />);
}

export default Component;
