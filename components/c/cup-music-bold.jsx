import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mek24e_ia.css';
import '../../css/i/i1258-uxv.css';
import '../../css/q/qwz1y-byg.css';
import '../../css/o/owtnwjtgw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mek24e_ia"/><path clip-rule="evenodd" class="i1258-uxv"/><path class="qwz1y-byg"/><path class="owtnwjtgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cup-music-bold"} {...others} />);
}

export default Component;
