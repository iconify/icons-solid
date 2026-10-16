import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5dxwccjh.css';
import '../../css/k/kej-obbqo.css';
import '../../css/n/n-e5m9_wm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e5dxwccjh"/><path class="kej-obbqo"/><path class="n-e5m9_wm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:butterfly-valve-20"} {...others} />);
}

export default Component;
