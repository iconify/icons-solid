import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bkry5yh6w.css';
import '../../css/v/vt7mt9-ct.css';
import '../../css/w/wl8gimjuu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bkry5yh6w"/><path class="vt7mt9-ct"/><path class="wl8gimjuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:laser-level-48"} {...others} />);
}

export default Component;
