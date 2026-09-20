import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vk0lcibke.css';
import '../../css/q/qad_0-bfd.css';
import '../../css/l/l3fgp_bdo.css';
import '../../css/r/rx-dy4b5a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vk0lcibke"/><path clip-rule="evenodd" class="qad_0-bfd"/><path class="l3fgp_bdo"/><path class="rx-dy4b5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:router"} {...others} />);
}

export default Component;
