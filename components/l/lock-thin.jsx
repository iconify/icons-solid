import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/m453z0aue.css';
import '../../css/z/zwjimdbzx.css';
import '../../css/p/pd8fwk-xu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="m453z0aue"/><path class="zwjimdbzx"/><path class="pd8fwk-xu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:lock-thin"} {...others} />);
}

export default Component;
