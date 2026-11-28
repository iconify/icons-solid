import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t0-xzacyx.css';
import '../../css/i/i6whcnmcj.css';
import '../../css/x/xczcw10qs.css';
import '../../css/w/we4rjob8q.css';
import '../../css/h/h-g8yzq_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="t0-xzacyx"/><path class="i6whcnmcj"/><path class="xczcw10qs"/><path class="we4rjob8q"/><path class="h-g8yzq_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:tap"} {...others} />);
}

export default Component;
