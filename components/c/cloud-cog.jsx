import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/owxwlli8z.css';
import '../../css/s/svi0bmbba.css';
import '../../css/e/es_drv_1t.css';
import '../../css/f/fp04gnvab.css';
import '../../css/l/l2wt60ehi.css';
import '../../css/s/sksgsz23i.css';
import '../../css/f/fmr1r6btt.css';
import '../../css/z/zbue6wb6d.css';
import '../../css/h/hw0l3b_4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="owxwlli8z wm-shadow"/><path class="svi0bmbba"/><path class="es_drv_1t"/><path class="fp04gnvab"/><path class="l2wt60ehi wm-shine"/><path class="sksgsz23i wm-s"/><path class="fmr1r6btt wm-s"/><path class="wm-s zbue6wb6d"/><path class="hw0l3b_4d wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:cloud-cog"} {...others} />);
}

export default Component;
