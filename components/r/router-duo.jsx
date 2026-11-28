import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zworp1_wz.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/min6896fr.css';
import '../../css/x/x8xe-i45p.css';
import '../../css/r/r1m96mcul.css';
import '../../css/q/quebq7byq.css';
import '../../css/w/wa8h8j42u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary zworp1_wz"/><g class="dt0cm9dhy primary"><path class="min6896fr"/><path class="x8xe-i45p"/><path class="r1m96mcul"/><path class="quebq7byq"/><path class="wa8h8j42u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:router-duo"} {...others} />);
}

export default Component;
