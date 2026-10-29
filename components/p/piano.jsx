import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pg9vz9ren.css';
import '../../css/v/vdtmedcky.css';
import '../../css/e/evwulis9w.css';
import '../../css/u/uldfhrmyw.css';
import '../../css/h/hti504bns.css';
import '../../css/u/uxdt96bpb.css';
import '../../css/e/epqahibxp.css';
import '../../css/m/mmzhljert.css';
import '../../css/i/i8jf1bbdo.css';
import '../../css/i/io82qqbjz.css';
import '../../css/n/nt0o7qv1v.css';
import '../../css/m/mfivnsb-j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pg9vz9ren wm-shadow"/><path class="vdtmedcky wm-shadow"/><path class="evwulis9w"/><path class="uldfhrmyw"/><path class="hti504bns"/><path class="uxdt96bpb"/><path class="epqahibxp wm-shine"/><path class="mmzhljert wm-shine"/><path class="i8jf1bbdo"/><path class="io82qqbjz"/><path class="nt0o7qv1v"/><path class="mfivnsb-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:piano"} {...others} />);
}

export default Component;
