import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/viy0zll_e.css';
import '../../css/p/pv9_bgb_b.css';
import '../../css/y/yrfd-8b8a.css';
import '../../css/o/o6xl7de2n.css';
import '../../css/j/j-uw8jw0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="viy0zll_e"/><path class="pv9_bgb_b"/><path class="yrfd-8b8a"/><path class="o6xl7de2n"/><path class="j-uw8jw0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:mobile-shopping-cart"} {...others} />);
}

export default Component;
