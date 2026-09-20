import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kbbftyu-m.css';
import '../../css/t/t_8fwhbtu.css';
import '../../css/c/ctg14gobl.css';
import '../../css/o/o3lk08g7r.css';
import '../../css/w/w44z6ybzz.css';
import '../../css/u/ur-0t6b4e.css';
import '../../css/x/xxfyb4b_r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kbbftyu-m"/><path class="t_8fwhbtu"/><path class="ctg14gobl"/><path class="o3lk08g7r"/><path class="w44z6ybzz"/><path class="ur-0t6b4e"/><path class="xxfyb4b_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notebook-linear"} {...others} />);
}

export default Component;
