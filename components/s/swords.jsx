import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l94lzwbyd.css';
import '../../css/f/f-1kttb5g.css';
import '../../css/t/tx8qkwbor.css';
import '../../css/h/h7iky36fi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="l94lzwbyd"/><path class="f-1kttb5g"/><path class="tx8qkwbor"/><path class="h7iky36fi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:swords"} {...others} />);
}

export default Component;
