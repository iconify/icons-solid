import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tg2gynv_b.css';
import '../../css/i/iskd-qb2n.css';
import '../../css/m/m3nd8bbne.css';
import '../../css/i/i2f7-4b-m.css';
import '../../css/h/hlkhk_vuo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="tg2gynv_b"/><path class="iskd-qb2n"/><path class="m3nd8bbne"/><path class="i2f7-4b-m"/><path class="hlkhk_vuo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:landscape-2"} {...others} />);
}

export default Component;
