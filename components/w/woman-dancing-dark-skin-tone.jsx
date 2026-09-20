import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_raf5bng.css';
import '../../css/t/tjb7s8_am.css';
import '../../css/p/pg609h32h.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/y/yv-iidcey.css';
import '../../css/k/kvik-yb-w.css';
import '../../css/d/ddhnwibdu.css';
import '../../css/d/dm0zs2a_x.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="e_raf5bng"><circle class="tjb7s8_am"/><path class="pg609h32h"/></g><g class="brzn_0bpr"><circle class="yv-iidcey"/><path class="kvik-yb-w"/><path class="ddhnwibdu"/><path class="dm0zs2a_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-dancing-dark-skin-tone"} {...others} />);
}

export default Component;
