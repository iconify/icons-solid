import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pqmz6enqv.css';
import '../../css/u/uu3b6qbsc.css';
import '../../css/o/o4mz_86wa.css';
import '../../css/v/vv4lo6b2m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="pqmz6enqv"/><path class="uu3b6qbsc"/><path class="o4mz_86wa"/><path class="vv4lo6b2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:traffic-cone"} {...others} />);
}

export default Component;
