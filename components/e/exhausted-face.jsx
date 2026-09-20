import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zn27xeyvd.css';
import '../../css/s/s8xv9zlbi.css';
import '../../css/h/huuajhmrh.css';
import '../../css/c/cqe48nb0m.css';
import '../../css/n/nc2rvubaf.css';
import '../../css/l/lkqcz2b_r.css';
import '../../css/z/znl32qbrk.css';
import '../../css/f/f76lvdb0k.css';
import '../../css/a/acao8ybgt.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="zn27xeyvd"/><path class="s8xv9zlbi"/><circle class="huuajhmrh"/><path class="cqe48nb0m"/><path class="nc2rvubaf"/><path class="lkqcz2b_r"/><path class="znl32qbrk"/><path class="f76lvdb0k"/><path class="acao8ybgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:exhausted-face"} {...others} />);
}

export default Component;
