import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c-9_rj_3o.css';
import '../../css/b/b6y58ab-k.css';
import '../../css/z/zn07s_brs.css';
import '../../css/i/i8vq9lbvg.css';

const viewBox = {"width":301,"height":225};
const content = `<g class="ft5dv1b6b"><path class="c-9_rj_3o"/><path class="b6y58ab-k"/><path class="zn07s_brs"/><path class="i8vq9lbvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:pg"} {...others} />);
}

export default Component;
