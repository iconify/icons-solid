import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-l1pd0_w.css';
import '../../css/t/tdrlb7b0w.css';
import '../../css/h/h9z2q_b6q.css';
import '../../css/a/axq84z9hc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h-l1pd0_w"><path class="tdrlb7b0w"/><path clip-rule="evenodd" class="h9z2q_b6q"/><path clip-rule="evenodd" class="axq84z9hc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:magnet-solid"} {...others} />);
}

export default Component;
