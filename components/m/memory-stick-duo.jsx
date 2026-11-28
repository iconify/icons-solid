import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i448nnfhx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rmt2jqj-j.css';
import '../../css/a/aiipvobyb.css';
import '../../css/r/r0dxi9bwk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i448nnfhx secondary"/><g class="dt0cm9dhy primary"><path class="rmt2jqj-j"/><path class="aiipvobyb"/><path class="r0dxi9bwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:memory-stick-duo"} {...others} />);
}

export default Component;
