import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bspj2u0td.css';
import '../../css/p/puxazr8ku.css';
import '../../css/s/s5yx09_gc.css';
import '../../css/e/euua0jb3r.css';
import '../../css/p/pynb684jo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bspj2u0td"/><path class="puxazr8ku"/><path class="s5yx09_gc"/><path class="euua0jb3r"/><path class="pynb684jo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-5-linear"} {...others} />);
}

export default Component;
