import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zu6ek4h1t.css';
import '../../css/r/rgbhf6bcm.css';

const viewBox = {"width":64,"height":77};
const content = `<g class="cuyn6tgcc"><path class="zu6ek4h1t"/><path class="rgbhf6bcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:warden"} {...others} />);
}

export default Component;
