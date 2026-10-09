import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obu46ub-t.css';
import '../../css/k/kzkq8kbod.css';
import '../../css/b/bzo0k_whu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="obu46ub-t"/><path class="kzkq8kbod"/><path class="bzo0k_whu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-panel-bolt-20-bold"} {...others} />);
}

export default Component;
