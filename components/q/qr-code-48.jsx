import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4x0tctpq.css';
import '../../css/g/gmws-ab3f.css';
import '../../css/v/vviu6n41p.css';
import '../../css/v/vmzdg8b4a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w4x0tctpq"/><path class="gmws-ab3f"/><path class="vviu6n41p"/><path class="vmzdg8b4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:qr-code-48"} {...others} />);
}

export default Component;
