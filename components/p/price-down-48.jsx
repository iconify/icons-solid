import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1ftczb6h.css';
import '../../css/d/dlrxuzy1s.css';
import '../../css/k/kyrmlcowv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g1ftczb6h"/><path class="dlrxuzy1s"/><path class="kyrmlcowv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:price-down-48"} {...others} />);
}

export default Component;
