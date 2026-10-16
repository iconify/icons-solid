import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kfxffib8l.css';
import '../../css/w/we7578b5j.css';
import '../../css/q/qpludsmxe.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kfxffib8l"/><path class="we7578b5j"/><path class="qpludsmxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pharmacy-20"} {...others} />);
}

export default Component;
