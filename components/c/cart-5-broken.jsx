import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/txxo7ybhm.css';
import '../../css/k/ke3a2_b3b.css';
import '../../css/s/s5yx09_gc.css';
import '../../css/e/euua0jb3r.css';
import '../../css/p/pynb684jo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="txxo7ybhm"/><path class="ke3a2_b3b"/><path class="s5yx09_gc"/><path class="euua0jb3r"/><path class="pynb684jo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-5-broken"} {...others} />);
}

export default Component;
