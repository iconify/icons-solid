import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tty_6yy-t.css';
import '../../css/o/ot82azbfv.css';
import '../../css/z/zhfwy2bbl.css';
import '../../css/o/o_vwuj4ss.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tty_6yy-t"/><path class="ot82azbfv"/><path class="zhfwy2bbl"/><path class="o_vwuj4ss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:biomass-20-bold"} {...others} />);
}

export default Component;
