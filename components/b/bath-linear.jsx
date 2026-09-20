import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zwlnt-l0k.css';
import '../../css/u/usqinzbwd.css';
import '../../css/j/j7lpo2bzk.css';
import '../../css/y/yirxaabex.css';
import '../../css/v/vz6h-5b6e.css';
import '../../css/x/x-f9gbc6v.css';
import '../../css/g/gg65u8b7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zwlnt-l0k"/><path class="usqinzbwd"/><path class="j7lpo2bzk"/><path class="yirxaabex"/><path class="vz6h-5b6e"/><path class="x-f9gbc6v"/><path class="gg65u8b7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bath-linear"} {...others} />);
}

export default Component;
