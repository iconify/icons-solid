import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/njuhqfbuz.css';
import '../../css/u/ubhlymbko.css';
import '../../css/t/tvyzlck_r.css';
import '../../css/j/j26whdbev.css';
import '../../css/a/acx55_b8y.css';
import '../../css/k/k3uzbcyno.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="njuhqfbuz wm-shadow"/><path class="ubhlymbko"/><path class="tvyzlck_r"/><path class="j26whdbev"/><path class="acx55_b8y"/><path class="k3uzbcyno"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:washing-machine"} {...others} />);
}

export default Component;
