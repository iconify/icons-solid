import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kllrszb1h.css';
import '../../css/q/q6laauggs.css';
import '../../css/d/d3uhlcbil.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kllrszb1h"/><path class="q6laauggs"/><path class="d3uhlcbil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:xor-gate-48-bold"} {...others} />);
}

export default Component;
