import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nntdrfmki.css';
import '../../css/r/ra3icybqn.css';
import '../../css/i/ia-wcjbpv.css';
import '../../css/s/shxjsdxjs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="nntdrfmki"/><path class="ra3icybqn"/><path clip-rule="evenodd" class="ia-wcjbpv"/><path class="shxjsdxjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clapperboard-text-bold"} {...others} />);
}

export default Component;
