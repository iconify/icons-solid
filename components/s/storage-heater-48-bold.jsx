import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nj6zr-b_t.css';
import '../../css/z/zt2hc146k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nj6zr-b_t"/><path class="zt2hc146k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:storage-heater-48-bold"} {...others} />);
}

export default Component;
