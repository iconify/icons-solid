import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/gay0pcbdd.css';
import '../../css/k/k8dysbxpr.css';
import '../../css/i/ikqmcubfs.css';
import '../../css/q/q1f94nb7y.css';
import '../../css/v/v1oa58mks.css';
import '../../css/h/hj-m44bje.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="gay0pcbdd wm-shadow"/><path class="k8dysbxpr"/><path class="ikqmcubfs"/><path class="q1f94nb7y"/><path class="v1oa58mks wm-shine"/><path class="hj-m44bje wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:code"} {...others} />);
}

export default Component;
