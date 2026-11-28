import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x6qr2bbqx.css';
import '../../css/y/y-4pm4bgt.css';
import '../../css/r/rn270gbuw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="x6qr2bbqx"/><path class="y-4pm4bgt"/><path class="rn270gbuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:log-out-duo"} {...others} />);
}

export default Component;
