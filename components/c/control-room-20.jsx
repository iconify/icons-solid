import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n56u5w1us.css';
import '../../css/c/cwy5dxbgm.css';
import '../../css/k/kmuwojfof.css';
import '../../css/t/tli3q6bmx.css';
import '../../css/n/n6t65ilhd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n56u5w1us"/><path class="cwy5dxbgm"/><path class="kmuwojfof"/><path class="tli3q6bmx"/><path class="n6t65ilhd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:control-room-20"} {...others} />);
}

export default Component;
