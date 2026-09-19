import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s39efpwen.css';
import '../../css/u/ucu_1lbpn.css';
import '../../css/h/hscz_labj.css';
import '../../css/v/vbo612euk.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s39efpwen"/><path class="ucu_1lbpn"/><path clip-rule="evenodd" class="hscz_labj"/><path class="vbo612euk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:book-open-bold"} {...others} />);
}

export default Component;
