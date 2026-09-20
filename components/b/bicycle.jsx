import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/igz61olkm.css';
import '../../css/p/p749f_u1o.css';
import '../../css/z/z6hf0nvwr.css';
import '../../css/f/fmg8n-8ff.css';
import '../../css/i/i9fjefbqx.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="igz61olkm"/><path class="p749f_u1o"/><path clip-rule="evenodd" class="z6hf0nvwr"/><path class="fmg8n-8ff"/><path class="i9fjefbqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:bicycle"} {...others} />);
}

export default Component;
