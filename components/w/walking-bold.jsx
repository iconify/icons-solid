import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zbimwubjb.css';
import '../../css/x/xba_lackm.css';
import '../../css/u/u2xr8tbqj.css';
import '../../css/p/puvbpvbom.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zbimwubjb"/><path class="xba_lackm"/><path clip-rule="evenodd" class="u2xr8tbqj"/><path class="puvbpvbom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:walking-bold"} {...others} />);
}

export default Component;
