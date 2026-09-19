import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p11yxdbta.css';
import '../../css/x/xyb8xnbmc.css';
import '../../css/o/o-u2n4izs.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p11yxdbta"/><path class="xyb8xnbmc"/><path class="o-u2n4izs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:layer-minus-bold"} {...others} />);
}

export default Component;
