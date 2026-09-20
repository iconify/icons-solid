import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ojt3ipb_q.css';
import '../../css/g/g4jicabdb.css';
import '../../css/u/u2yyeebpw.css';
import '../../css/q/qtvivvozr.css';
import '../../css/e/em-fmczta.css';
import '../../css/j/jlwwu3x5u.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ojt3ipb_q"/><path class="g4jicabdb"/><path class="u2yyeebpw"/><g class="qtvivvozr"><path class="em-fmczta"/><path class="jlwwu3x5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:rightwards-pushing-hand"} {...others} />);
}

export default Component;
