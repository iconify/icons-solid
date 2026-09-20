import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k4m--obei.css';
import '../../css/x/xuvn6vbjj.css';
import '../../css/e/euua0jb3r.css';
import '../../css/p/pynb684jo.css';
import '../../css/t/txxo7ybhm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="k4m--obei"/><path class="xuvn6vbjj"/><path class="euua0jb3r"/><path class="pynb684jo"/><path class="txxo7ybhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-4-broken"} {...others} />);
}

export default Component;
