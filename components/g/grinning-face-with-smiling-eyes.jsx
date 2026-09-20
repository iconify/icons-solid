import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az7hstbmu.css';
import '../../css/x/xtagy0bqr.css';
import '../../css/q/q0r50o_-q.css';
import '../../css/z/z04drlb1l.css';
import '../../css/s/sgor8wbzm.css';
import '../../css/c/cu8rrjbgf.css';
import '../../css/i/i97z-ibpg.css';
import '../../css/j/jii6c3x9u.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="az7hstbmu"/><path class="xtagy0bqr"/><path class="q0r50o_-q"/><g class="z04drlb1l"><circle class="sgor8wbzm"/><path class="cu8rrjbgf"/><path class="i97z-ibpg"/><path class="jii6c3x9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:grinning-face-with-smiling-eyes"} {...others} />);
}

export default Component;
