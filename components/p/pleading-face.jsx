import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k17q9m45z.css';
import '../../css/n/nvz9-2_cn.css';
import '../../css/t/t81cnqbnj.css';
import '../../css/h/huuajhmrh.css';
import '../../css/i/igeymfbfr.css';
import '../../css/b/b89xu61ou.css';
import '../../css/f/feq5sd-ut.css';
import '../../css/b/btus2g_1p.css';
import '../../css/e/ehiple3ya.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="k17q9m45z"/><circle class="nvz9-2_cn"/><circle class="t81cnqbnj"/><circle class="huuajhmrh"/><path class="igeymfbfr"/><circle class="b89xu61ou"/><circle class="feq5sd-ut"/><path class="btus2g_1p"/><path class="ehiple3ya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:pleading-face"} {...others} />);
}

export default Component;
