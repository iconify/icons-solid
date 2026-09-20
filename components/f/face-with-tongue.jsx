import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c479rxbrg.css';
import '../../css/t/t0cgit8gt.css';
import '../../css/n/nq9zpfqqf.css';
import '../../css/h/huuajhmrh.css';
import '../../css/f/f7swgulaf.css';
import '../../css/b/bk5r_vgka.css';
import '../../css/t/tdhzq11dq.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="c479rxbrg"/><path class="t0cgit8gt"/><path class="nq9zpfqqf"/><circle class="huuajhmrh"/><path class="f7swgulaf"/><path class="bk5r_vgka"/><path class="tdhzq11dq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:face-with-tongue"} {...others} />);
}

export default Component;
