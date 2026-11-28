import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2x943bin.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uw7bwsbpv.css';
import '../../css/i/i197gjbsm.css';
import '../../css/m/moutubcrf.css';
import '../../css/g/gvo8f0vqe.css';
import '../../css/q/q-08tmhlv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s2x943bin secondary"/><g class="dt0cm9dhy primary"><path class="uw7bwsbpv"/><path class="i197gjbsm"/><path class="moutubcrf"/><path class="gvo8f0vqe"/><path class="q-08tmhlv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:linkedin-duo"} {...others} />);
}

export default Component;
