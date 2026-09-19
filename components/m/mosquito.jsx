import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o22w_qg5b.css';
import '../../css/g/gxzepe1nv.css';
import '../../css/s/s04hlrbua.css';
import '../../css/t/t56mc651a.css';
import '../../css/g/g_uyoe1hm.css';
import '../../css/m/m08bxwj7c.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="o22w_qg5b"/><path class="gxzepe1nv"/><path class="s04hlrbua"/><path class="t56mc651a"/><path class="g_uyoe1hm"/><path class="m08bxwj7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:mosquito"} {...others} />);
}

export default Component;
