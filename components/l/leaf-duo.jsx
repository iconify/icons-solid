import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/spqxaywrr.css';
import '../../css/m/mp77goa1w.css';
import '../../css/p/pg6c6hbqu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="spqxaywrr"/><path class="mp77goa1w wm-a"/><path class="pg6c6hbqu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:leaf-duo"} {...others} />);
}

export default Component;
