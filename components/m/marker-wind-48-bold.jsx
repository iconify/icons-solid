import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etlms99xu.css';
import '../../css/t/tzva1-tot.css';
import '../../css/x/x_g1zubgb.css';
import '../../css/s/s0rp5vqeb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="etlms99xu"/><path class="tzva1-tot"/><path class="x_g1zubgb"/><path class="s0rp5vqeb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:marker-wind-48-bold"} {...others} />);
}

export default Component;
