import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lxsm3nbbt.css';
import '../../css/u/u0t0ofhbn.css';
import '../../css/e/e_v0ieb8w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lxsm3nbbt"/><path class="u0t0ofhbn"/><path class="e_v0ieb8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:enhanced-weathering-20"} {...others} />);
}

export default Component;
