import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/js5qnacfg.css';
import '../../css/u/ua4nezstw.css';
import '../../css/l/lxggt5t6n.css';
import '../../css/g/g16iygj2h.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="t_2lkqbxb"><path class="js5qnacfg"/><path class="ua4nezstw"/><path class="lxggt5t6n"/><path class="g16iygj2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:ladder"} {...others} />);
}

export default Component;
