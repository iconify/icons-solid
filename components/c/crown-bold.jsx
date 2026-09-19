import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jz143rbfe.css';
import '../../css/a/atekq_emk.css';
import '../../css/q/qse1po-lv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jz143rbfe"/><rect class="atekq_emk"/><path clip-rule="evenodd" class="qse1po-lv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:crown-bold"} {...others} />);
}

export default Component;
