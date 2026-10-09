import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tfamm_bud.css';
import '../../css/m/mg071ztjv.css';
import '../../css/n/nxyg22omp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tfamm_bud"/><path class="mg071ztjv"/><path class="nxyg22omp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rowing-48-bold"} {...others} />);
}

export default Component;
