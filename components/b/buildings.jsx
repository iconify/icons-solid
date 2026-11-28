import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qc86pnbnj.css';
import '../../css/u/u-5r16bnn.css';
import '../../css/n/n34hn_bmf.css';
import '../../css/n/n64hk8xnk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="qc86pnbnj"/><path class="u-5r16bnn"/><path class="n34hn_bmf"/><path class="n64hk8xnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:buildings"} {...others} />);
}

export default Component;
