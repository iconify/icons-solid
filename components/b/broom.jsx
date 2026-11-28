import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mx0j4ib4e.css';
import '../../css/s/suhhlyhdd.css';
import '../../css/r/r6qgbeuwa.css';
import '../../css/d/dne8ex4rc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="mx0j4ib4e"/><path class="suhhlyhdd"/><path class="r6qgbeuwa"/><path class="dne8ex4rc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:broom"} {...others} />);
}

export default Component;
