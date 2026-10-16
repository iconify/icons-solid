import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4bkgwbdg.css';
import '../../css/d/d0q_czbpk.css';
import '../../css/j/jvzo1llrd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k4bkgwbdg"/><path class="d0q_czbpk"/><path class="jvzo1llrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:geothermal-plant-check-48-bold"} {...others} />);
}

export default Component;
