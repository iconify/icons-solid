import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_6rndbde.css';
import '../../css/t/ti_1d3blo.css';
import '../../css/k/kew39h_ks.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e_6rndbde"/><path class="ti_1d3blo"/><path class="kew39h_ks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flange-48-bold"} {...others} />);
}

export default Component;
