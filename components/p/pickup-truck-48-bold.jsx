import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmzmn_bsa.css';
import '../../css/t/tf5y_6b6k.css';
import '../../css/k/k6e-3tb2t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hmzmn_bsa"/><path class="tf5y_6b6k"/><path class="k6e-3tb2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pickup-truck-48-bold"} {...others} />);
}

export default Component;
