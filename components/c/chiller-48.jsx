import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7olx61gw.css';
import '../../css/r/rm-okbbyz.css';
import '../../css/t/t7yb8ybvd.css';
import '../../css/k/kwtxaxb-s.css';
import '../../css/u/urikaqb0x.css';
import '../../css/h/hf_5s8bfz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r7olx61gw"/><path class="rm-okbbyz"/><path class="t7yb8ybvd"/><path class="kwtxaxb-s"/><path class="urikaqb0x"/><path class="hf_5s8bfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chiller-48"} {...others} />);
}

export default Component;
