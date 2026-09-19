import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/edbboo-hy.css';
import '../../css/q/q4hhm4b9u.css';
import '../../css/m/mfc7nxp-y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="edbboo-hy"/><path class="q4hhm4b9u"/><path class="mfc7nxp-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:book"} {...others} />);
}

export default Component;
