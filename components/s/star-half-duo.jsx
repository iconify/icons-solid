import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/iv6i0wvsu.css';
import '../../css/q/qfd-q7blm.css';
import '../../css/k/k2m212bgo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="iv6i0wvsu"/><path class="qfd-q7blm wm-a"/><path class="k2m212bgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:star-half-duo"} {...others} />);
}

export default Component;
