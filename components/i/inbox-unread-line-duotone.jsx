import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j-v4rgbdl.css';
import '../../css/u/u00ey8bps.css';
import '../../css/r/ribhzvbcl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="j-v4rgbdl"/><circle class="u00ey8bps"/><path class="ribhzvbcl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:inbox-unread-line-duotone"} {...others} />);
}

export default Component;
