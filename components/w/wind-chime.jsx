import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1pfysbee.css';
import '../../css/q/qbg2il0rj.css';
import '../../css/s/s4mgqibrh.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/m/m0n1hg71d.css';
import '../../css/k/kz0xypbxo.css';
import '../../css/k/kp83i5bbc.css';
import '../../css/w/wo275mbmt.css';
import '../../css/z/z6_c1lbjr.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="v1pfysbee"/><path class="qbg2il0rj"/><path class="s4mgqibrh"/><g class="brzn_0bpr"><path class="m0n1hg71d"/><path class="kz0xypbxo"/><path class="kp83i5bbc"/><path class="wo275mbmt"/><path class="z6_c1lbjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:wind-chime"} {...others} />);
}

export default Component;
