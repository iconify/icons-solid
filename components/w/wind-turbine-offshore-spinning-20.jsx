import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqnj4_bfn.css';
import '../../css/i/icilmibae.css';
import '../../css/x/xe4fz0b7n.css';
import '../../css/p/p-1abpbng.css';
import '../../css/g/gh15labbn.css';
import '../../css/p/piqugpj_k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vqnj4_bfn"/><path class="icilmibae"/><path class="xe4fz0b7n"/><path class="p-1abpbng"/><path class="gh15labbn"/><path class="piqugpj_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-turbine-offshore-spinning-20"} {...others} />);
}

export default Component;
