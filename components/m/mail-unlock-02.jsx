import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wy0kmte2f.css';
import '../../css/d/df-j23bjo.css';
import '../../css/x/x_yjs5-rj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wy0kmte2f"/><path class="df-j23bjo"/><path class="x_yjs5-rj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-unlock-02"} {...others} />);
}

export default Component;
