import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i5ad8vbal.css';
import '../../css/v/v3_ntib1p.css';
import '../../css/y/y50a790-m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i5ad8vbal"/><path class="v3_ntib1p"/><path class="y50a790-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wifi-48-bold"} {...others} />);
}

export default Component;
