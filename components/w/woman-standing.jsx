import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dn_90mbaw.css';
import '../../css/j/jh1halfsl.css';
import '../../css/l/l1r96vb_l.css';
import '../../css/v/v0yf2_89p.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dn_90mbaw"/><path class="jh1halfsl"/><path class="l1r96vb_l"/><path class="v0yf2_89p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-standing"} {...others} />);
}

export default Component;
