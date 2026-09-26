import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t-dkfybbn.css';
import '../../css/f/fu0hrlguj.css';
import '../../css/t/t4qaumccy.css';
import '../../css/e/e0cmz0boh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="t-dkfybbn"/><path class="fu0hrlguj"/><path class="t4qaumccy"/><path class="e0cmz0boh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-lock-broken"} {...others} />);
}

export default Component;
