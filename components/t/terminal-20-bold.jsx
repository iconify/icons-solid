import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fi2c5z44e.css';
import '../../css/x/xmsbzrzmf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fi2c5z44e"/><path class="xmsbzrzmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:terminal-20-bold"} {...others} />);
}

export default Component;
