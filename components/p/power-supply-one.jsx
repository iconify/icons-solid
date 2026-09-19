import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/s/sotf17t_r.css';
import '../../css/e/e7qxnab6p.css';
import '../../css/g/gngyfac2q.css';
import '../../css/t/tbwpbq8rj.css';
import '../../css/v/vk2mc_b_e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="sotf17t_r"/><path class="e7qxnab6p"/><path class="gngyfac2q"/><path class="tbwpbq8rj"/><path class="vk2mc_b_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:power-supply-one"} {...others} />);
}

export default Component;
