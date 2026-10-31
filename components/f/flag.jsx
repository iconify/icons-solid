import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/sv4cljb-z.css';
import '../../css/e/en-mohuvb.css';
import '../../css/d/dgpnbnawx.css';
import '../../css/n/ngkbrebze.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="sv4cljb-z wm-shadow"/><path class="en-mohuvb wm-shadow"/><path class="dgpnbnawx"/><path class="ngkbrebze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:flag"} {...others} />);
}

export default Component;
