import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x2p_4xcpi.css';
import '../../css/g/gj10flppe.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x2p_4xcpi"/><path class="gj10flppe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tidal-barrage-20"} {...others} />);
}

export default Component;
