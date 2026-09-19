import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gag497ble.css';
import '../../css/e/e0fv-pquy.css';
import '../../css/y/yt-6yebqn.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="gag497ble"/><path clip-rule="evenodd" class="e0fv-pquy"/><path class="yt-6yebqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:color-picker-print"} {...others} />);
}

export default Component;
