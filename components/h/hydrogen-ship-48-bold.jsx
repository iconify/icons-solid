import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_q7i3b9l.css';
import '../../css/h/hw_xbachc.css';
import '../../css/c/chbbpgb6p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h_q7i3b9l"/><path class="hw_xbachc"/><path class="chbbpgb6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-ship-48-bold"} {...others} />);
}

export default Component;
