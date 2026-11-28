import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/njw-h6bde.css';
import '../../css/b/b3-simbkr.css';
import '../../css/g/g1ayrbbxm.css';
import '../../css/r/r5esecc_x.css';
import '../../css/o/o4v3tubaw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="njw-h6bde"/><path class="b3-simbkr"/><path class="g1ayrbbxm"/><path class="r5esecc_x"/><path class="o4v3tubaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:chair"} {...others} />);
}

export default Component;
