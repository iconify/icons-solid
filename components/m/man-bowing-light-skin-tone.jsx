import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hkoasrbaf.css';
import '../../css/n/nl2q_nj2e.css';
import '../../css/a/axz1gw3mg.css';
import '../../css/z/z04drlb1l.css';
import '../../css/c/coce3_gqh.css';
import '../../css/f/f8s8hvbzw.css';
import '../../css/v/v6vmjt5rj.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="hkoasrbaf"/><path class="nl2q_nj2e"/><path class="axz1gw3mg"/><g class="z04drlb1l"><path class="coce3_gqh"/><path class="f8s8hvbzw"/><path class="v6vmjt5rj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-bowing-light-skin-tone"} {...others} />);
}

export default Component;
