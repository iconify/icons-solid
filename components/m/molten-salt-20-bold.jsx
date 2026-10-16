import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fp_3l1bkn.css';
import '../../css/m/myhv_wb_n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fp_3l1bkn"/><path class="myhv_wb_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:molten-salt-20-bold"} {...others} />);
}

export default Component;
