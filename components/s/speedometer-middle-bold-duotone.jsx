import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fvo6grb2k.css';
import '../../css/w/wb5fmbcce.css';
import '../../css/n/n9_tkds6j.css';
import '../../css/m/m70zi1tzd.css';
import '../../css/z/zbdhk5wgn.css';
import '../../css/t/t_oztebto.css';
import '../../css/i/i0r0tpb_k.css';
import '../../css/l/lpvgm7hil.css';
import '../../css/m/mpv5vhdla.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fvo6grb2k"/><path class="wb5fmbcce"/><path class="n9_tkds6j"/><path class="m70zi1tzd"/><path class="zbdhk5wgn"/><path class="t_oztebto"/><path class="i0r0tpb_k"/><path class="lpvgm7hil"/><path class="mpv5vhdla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:speedometer-middle-bold-duotone"} {...others} />);
}

export default Component;
