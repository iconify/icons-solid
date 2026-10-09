import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwd4bqqyn.css';
import '../../css/t/th72r3bkf.css';
import '../../css/g/g5w0d9o1n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pwd4bqqyn"/><path class="th72r3bkf"/><path class="g5w0d9o1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sync-48-bold"} {...others} />);
}

export default Component;
