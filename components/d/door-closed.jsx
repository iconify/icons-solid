import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dfrwlyb9c.css';
import '../../css/x/x3t9tfaqk.css';
import '../../css/q/qwo29zb_b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dfrwlyb9c"/><path class="x3t9tfaqk"/><path class="qwo29zb_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:door-closed"} {...others} />);
}

export default Component;
