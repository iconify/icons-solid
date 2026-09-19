import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/p/phsm0ibvl.css';
import '../../css/d/ducgvmb6k.css';
import '../../css/g/g74o_4bwp.css';
import '../../css/h/h2vgcpbpj.css';
import '../../css/f/f7c4p-baq.css';
import '../../css/b/b6ylzex_l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="phsm0ibvl"/><path class="ducgvmb6k"/><path class="g74o_4bwp"/><path class="h2vgcpbpj"/><path class="f7c4p-baq"/><path class="b6ylzex_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hand-drag"} {...others} />);
}

export default Component;
