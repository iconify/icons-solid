import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lqtldpbjr.css';
import '../../css/z/zgpfknbfx.css';
import '../../css/a/ast-ebc7m.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="lqtldpbjr"/><path clip-rule="evenodd" class="zgpfknbfx"/><path class="ast-ebc7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bandage-bold"} {...others} />);
}

export default Component;
