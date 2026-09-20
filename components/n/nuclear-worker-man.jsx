import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bs538lbqo.css';
import '../../css/w/w625pib-k.css';
import '../../css/r/r--a2ebsz.css';
import '../../css/r/r9qn7ee9j.css';
import '../../css/d/dcvje17ni.css';
import '../../css/j/j3pgdrbrf.css';
import '../../css/h/hjc5rnbkm.css';
import '../../css/v/vs941ubdj.css';
import '../../css/k/klhk_vkkp.css';
import '../../css/d/d4jmfvmrd.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="bs538lbqo"/><circle class="w625pib-k"/><circle class="r--a2ebsz"/><path class="r9qn7ee9j"/><path class="dcvje17ni"/><path class="j3pgdrbrf"/><circle class="hjc5rnbkm"/><ellipse transform="rotate(-50 38.704 13.521)" class="vs941ubdj"/><ellipse transform="rotate(-40 33.704 13.521)" class="klhk_vkkp"/><circle class="d4jmfvmrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:nuclear-worker-man"} {...others} />);
}

export default Component;
