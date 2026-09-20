import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xonnvibpz.css';
import '../../css/f/fegxd4p-h.css';
import '../../css/v/v-asesbpn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xonnvibpz"/><path class="fegxd4p-h"/><path class="v-asesbpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:analyze-filled"} {...others} />);
}

export default Component;
