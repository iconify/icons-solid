import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hwr7riwkr.css';
import '../../css/l/l87c0nb7d.css';
import '../../css/r/r851mssgl.css';
import '../../css/l/lcx6pvbtq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="hwr7riwkr"/><path class="l87c0nb7d"/><path class="r851mssgl"/><path class="lcx6pvbtq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:grab"} {...others} />);
}

export default Component;
