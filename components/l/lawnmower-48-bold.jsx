import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2j8o9s_m.css';
import '../../css/n/n6kousbsq.css';
import '../../css/i/igillabjp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n2j8o9s_m"/><path class="n6kousbsq"/><path class="igillabjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lawnmower-48-bold"} {...others} />);
}

export default Component;
