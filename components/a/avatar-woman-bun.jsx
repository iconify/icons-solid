import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qryuybvjm.css';
import '../../css/x/x4pesup-q.css';
import '../../css/g/ggveb-b_e.css';
import '../../css/x/xpvj_zbjb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="qryuybvjm wm-shadow"/><path class="x4pesup-q"/><path class="ggveb-b_e"/><path class="xpvj_zbjb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:avatar-woman-bun"} {...others} />);
}

export default Component;
