import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lk387obkc.css';
import '../../css/o/ojeiq7bkf.css';
import '../../css/v/vrkxz3m8f.css';
import '../../css/a/apmotxbik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="lk387obkc"/><path class="ojeiq7bkf"/><path class="vrkxz3m8f"/><path class="apmotxbik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:running-round-line-duotone"} {...others} />);
}

export default Component;
