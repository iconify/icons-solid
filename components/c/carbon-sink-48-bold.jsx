import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pbd60rb4y.css';
import '../../css/x/xcc9jibon.css';
import '../../css/n/nf733ig4z.css';
import '../../css/c/ckdt7gbmp.css';
import '../../css/s/s4faz6n8b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pbd60rb4y"/><path class="xcc9jibon"/><path class="nf733ig4z"/><path class="ckdt7gbmp"/><path class="s4faz6n8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-sink-48-bold"} {...others} />);
}

export default Component;
