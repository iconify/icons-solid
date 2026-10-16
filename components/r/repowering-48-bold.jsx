import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g15t1bclt.css';
import '../../css/j/j0qwephmf.css';
import '../../css/x/xpsm4tv3b.css';
import '../../css/z/zs5a_bbdq.css';
import '../../css/d/d5139_r8d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g15t1bclt"/><path class="j0qwephmf"/><path class="xpsm4tv3b"/><path class="zs5a_bbdq"/><path class="d5139_r8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:repowering-48-bold"} {...others} />);
}

export default Component;
