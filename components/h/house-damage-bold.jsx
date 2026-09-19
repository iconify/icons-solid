import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v1fjreblw.css';
import '../../css/j/jj3pd4b8b.css';
import '../../css/i/i3_4uubdv.css';
import '../../css/n/n742wkbxv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="v1fjreblw"/><path clip-rule="evenodd" class="jj3pd4b8b"/><path clip-rule="evenodd" class="i3_4uubdv"/><path clip-rule="evenodd" class="n742wkbxv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:house-damage-bold"} {...others} />);
}

export default Component;
