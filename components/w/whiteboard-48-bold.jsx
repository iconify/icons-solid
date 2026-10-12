import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kx1t0xbct.css';
import '../../css/u/u899ipb3o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kx1t0xbct"/><path class="u899ipb3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:whiteboard-48-bold"} {...others} />);
}

export default Component;
