import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ht-n9hb4a.css';
import '../../css/p/pzb_m7bfd.css';
import '../../css/j/je-0lmbbj.css';
import '../../css/z/zzzys-r3j.css';
import '../../css/d/dt3hizy-v.css';
import '../../css/s/st53awbpp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ht-n9hb4a"/><path class="pzb_m7bfd"/><path class="je-0lmbbj"/><path class="zzzys-r3j"/><path class="dt3hizy-v"/><path class="st53awbpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:motor-boat"} {...others} />);
}

export default Component;
