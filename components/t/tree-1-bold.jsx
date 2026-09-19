import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/ppv8sabtv.css';
import '../../css/s/swymxgbga.css';
import '../../css/a/azvt57uxv.css';
import '../../css/v/v1fljab8g.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ppv8sabtv"/><path class="swymxgbga"/><path clip-rule="evenodd" class="azvt57uxv"/><path class="v1fljab8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tree-1-bold"} {...others} />);
}

export default Component;
