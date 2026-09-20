import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fbtabu1sz.css';
import '../../css/c/ch32guwfs.css';
import '../../css/k/kz8wrqbpn.css';
import '../../css/r/rd8q98hym.css';
import '../../css/g/gsv_k0fqo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="fbtabu1sz"/><path class="ch32guwfs"/><path class="kz8wrqbpn"/><path class="rd8q98hym"/><path class="gsv_k0fqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:car-battery-bold-duotone"} {...others} />);
}

export default Component;
