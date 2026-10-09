import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-at6e2cq.css';
import '../../css/z/zf-4rt-bx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d-at6e2cq"/><path class="zf-4rt-bx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charger-location-48"} {...others} />);
}

export default Component;
