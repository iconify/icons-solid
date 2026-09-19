import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b9e1ifbih.css';
import '../../css/j/j-klc98dh.css';
import '../../css/z/z_x-bwblw.css';
import '../../css/z/zub92_ove.css';
import '../../css/r/rr6s2mbiz.css';
import '../../css/q/q-bsbwblg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="b9e1ifbih"/><path class="j-klc98dh"/><path class="z_x-bwblw"/><path class="zub92_ove"/><path class="rr6s2mbiz"/><path class="q-bsbwblg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:cocktail-glass"} {...others} />);
}

export default Component;
