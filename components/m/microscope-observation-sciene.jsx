import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vvo_4lblf.css';
import '../../css/g/gxnd-ryzh.css';
import '../../css/i/iphl04buv.css';
import '../../css/v/vlgnrqtjr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vvo_4lblf"/><path class="gxnd-ryzh"/><path class="iphl04buv"/><path class="vlgnrqtjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:microscope-observation-sciene"} {...others} />);
}

export default Component;
