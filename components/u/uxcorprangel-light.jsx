import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zu4ubeocl.css';
import '../../css/v/vqc8kubgt.css';
import '../../css/f/fonka_o1z.css';
import '../../css/s/s7rf-4btr.css';
import '../../css/p/p_as_hb9a.css';
import '../../css/j/jgs5g-b3c.css';
import '../../css/b/b501lxd-d.css';
import '../../css/j/jetvu4dqa.css';

const viewBox = {"width":1195,"height":1206};
const content = `<g class="ft5dv1b6b"><path class="zu4ubeocl"/><path class="vqc8kubgt"/><path class="fonka_o1z"/><path class="s7rf-4btr"/><path class="p_as_hb9a"/><path class="jgs5g-b3c"/><path class="b501lxd-d"/><path class="jetvu4dqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:uxcorprangel-light"} {...others} />);
}

export default Component;
