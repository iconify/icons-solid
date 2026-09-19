import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e03v5bc6t.css';
import '../../css/q/q9nl-gxlx.css';
import '../../css/p/psgm4limd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="e03v5bc6t"/><path class="q9nl-gxlx"/><path class="psgm4limd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:usb-connected-01"} {...others} />);
}

export default Component;
