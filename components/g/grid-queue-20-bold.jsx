import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vdn_2wb2j.css';
import '../../css/n/nvz_g9bec.css';
import '../../css/p/pzwt5rb-f.css';
import '../../css/r/rzhih4b3g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vdn_2wb2j"/><path class="nvz_g9bec"/><path class="pzwt5rb-f"/><path class="rzhih4b3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grid-queue-20-bold"} {...others} />);
}

export default Component;
