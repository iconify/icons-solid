import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/ql8wzqa2k.css';
import '../../css/f/fd7_frbmd.css';
import '../../css/q/qv_d-ebdy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ql8wzqa2k"/><path class="fd7_frbmd"/><path class="qv_d-ebdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-vertical-spacing-line-duotone"} {...others} />);
}

export default Component;
