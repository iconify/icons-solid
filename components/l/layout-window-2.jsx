import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tg2gynv_b.css';
import '../../css/p/pdl-pg57o.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="tg2gynv_b"/><path class="pdl-pg57o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:layout-window-2"} {...others} />);
}

export default Component;
