import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j3_4id34h.css';
import '../../css/g/gd92vsrsz.css';
import '../../css/r/rq8v8obdh.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="j3_4id34h"/><path clip-rule="evenodd" class="gd92vsrsz"/><path class="rq8v8obdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:images-bold"} {...others} />);
}

export default Component;
