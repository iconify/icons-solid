import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x5ds9ddzw.css';
import '../../css/d/dj27jhojv.css';
import '../../css/b/bxegrmbjp.css';
import '../../css/s/se36adcuq.css';
import '../../css/v/v7_qb8j7z.css';
import '../../css/d/dd__tcyya.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGPusuadEO)" class="x5ds9ddzw"/><path fill="url(#SVG2f7L8cLU)" class="x5ds9ddzw"/><path fill="url(#SVG9AhnabtW)" class="dj27jhojv"/><defs><linearGradient id="SVGPusuadEO" x1="7.808" x2="10.394" y1="15.064" y2="23.319" gradientUnits="userSpaceOnUse"><stop offset=".125" class="bxegrmbjp"/><stop offset="1" class="se36adcuq"/></linearGradient><linearGradient id="SVG2f7L8cLU" x1="12.003" x2="15.623" y1="13.047" y2="26.573" gradientUnits="userSpaceOnUse"><stop class="v7_qb8j7z"/><stop offset="1" class="dd__tcyya"/></linearGradient><linearGradient id="SVG9AhnabtW" x1="9.379" x2="14.475" y1="3.334" y2="11.472" gradientUnits="userSpaceOnUse"><stop offset=".125" class="bxegrmbjp"/><stop offset="1" class="se36adcuq"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:person-24"} {...others} />);
}

export default Component;
