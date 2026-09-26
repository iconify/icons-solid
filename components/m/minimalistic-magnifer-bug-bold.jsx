import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yz0ujqbim.css';
import '../../css/k/kdd-19ezf.css';
import '../../css/h/hw34cebkg.css';
import '../../css/m/mcvbrbb3a.css';
import '../../css/w/winjwabdp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="yz0ujqbim"/><path class="kdd-19ezf"/><path class="hw34cebkg"/><path class="mcvbrbb3a"/><path clip-rule="evenodd" class="winjwabdp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimalistic-magnifer-bug-bold"} {...others} />);
}

export default Component;
