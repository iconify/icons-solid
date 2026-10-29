import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fxlwt65ty.css';
import '../../css/y/y3nvvebgo.css';
import '../../css/w/wcas29b1h.css';
import '../../css/h/hjpmvwbth.css';
import '../../css/z/z05c70bso.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="fxlwt65ty wm-deco"/><path class="wm-deco y3nvvebgo"/><path class="wcas29b1h wm-deco"/><path class="hjpmvwbth"/><path class="z05c70bso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wifi-blueprint"} {...others} />);
}

export default Component;
