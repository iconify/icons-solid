import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ec_lwoagr.css';
import '../../css/f/flbf2qb7n.css';
import '../../css/t/t7622gbla.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ec_lwoagr"/><path class="flbf2qb7n"/><path class="t7622gbla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:motion-sensor-48-bold"} {...others} />);
}

export default Component;
