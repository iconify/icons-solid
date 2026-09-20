import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkq7-hbwz.css';
import '../../css/l/l3q1ft-lk.css';
import '../../css/w/wwjrytb2n.css';
import '../../css/i/i95yefugg.css';
import '../../css/l/ljtz1acgp.css';
import '../../css/z/z-1p72wln.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jkq7-hbwz"/><path class="l3q1ft-lk"/><path class="wwjrytb2n"/><path class="i95yefugg"/><path class="ljtz1acgp"/><path class="z-1p72wln"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-french-polynesia"} {...others} />);
}

export default Component;
