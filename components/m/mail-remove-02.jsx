import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e2_10oj2l.css';
import '../../css/d/df-j23bjo.css';
import '../../css/o/or3ztp_qk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="e2_10oj2l"/><path class="df-j23bjo"/><path class="or3ztp_qk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-remove-02"} {...others} />);
}

export default Component;
