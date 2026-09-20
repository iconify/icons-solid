import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jrhvs_bzd.css';
import '../../css/t/t96o_g7bk.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/t/tm48l7mqj.css';
import '../../css/v/vf1omxbtp.css';
import '../../css/d/dlwzbjben.css';
import '../../css/i/i1_t8pbly.css';
import '../../css/t/tl4v0vbpt.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jrhvs_bzd"/><path class="t96o_g7bk"/><g class="brzn_0bpr"><path class="tm48l7mqj"/><path class="vf1omxbtp"/><path class="dlwzbjben"/><path class="i1_t8pbly"/><path class="tl4v0vbpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:white-chess-rook"} {...others} />);
}

export default Component;
