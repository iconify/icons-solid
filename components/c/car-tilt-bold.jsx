import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wclrnbc5v.css';
import '../../css/r/r-s-tebmz.css';
import '../../css/g/gvxu7wpiu.css';
import '../../css/b/bn831ebwf.css';

const viewBox = {"width":82,"height":80};
const content = `<g class="ft5dv1b6b"><path class="wclrnbc5v"/><path clip-rule="evenodd" class="r-s-tebmz"/><path clip-rule="evenodd" class="gvxu7wpiu"/><path class="bn831ebwf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:car-tilt-bold"} {...others} />);
}

export default Component;
