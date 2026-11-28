import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7z2q9nlb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oxrujcyco.css';
import '../../css/c/c589ueb5l.css';
import '../../css/f/f_hosvf1s.css';
import '../../css/i/icup3-hnn.css';
import '../../css/z/ziipvshqc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p7z2q9nlb secondary"/><g class="dt0cm9dhy primary"><path class="oxrujcyco"/><path class="c589ueb5l"/><path class="f_hosvf1s"/><path class="icup3-hnn"/><path class="ziipvshqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:volcano-duo"} {...others} />);
}

export default Component;
