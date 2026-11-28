import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a43ax-bga.css';
import '../../css/r/rmoaf9mhl.css';
import '../../css/c/cbf0mmthl.css';
import '../../css/u/uju5t3m2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="a43ax-bga"/><path class="rmoaf9mhl"/><path class="cbf0mmthl"/><path class="uju5t3m2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:dumbbell"} {...others} />);
}

export default Component;
