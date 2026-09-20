import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d987rmbuf.css';
import '../../css/x/xxk001rbs.css';
import '../../css/v/v_k2obb1n.css';
import '../../css/b/blu2d0boo.css';
import '../../css/c/cenhw-bcv.css';
import '../../css/k/k2id6p_oa.css';
import '../../css/a/at3pwrbwh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d987rmbuf"/><path class="xxk001rbs"/><path class="v_k2obb1n"/><path class="blu2d0boo"/><path class="cenhw-bcv"/><path class="k2id6p_oa"/><path class="at3pwrbwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:ticket-add"} {...others} />);
}

export default Component;
