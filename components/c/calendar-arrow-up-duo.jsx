import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2wl57bbu.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k4-c7ob6h.css';
import '../../css/u/u71p-bc5o.css';
import '../../css/p/pweliwddp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary w2wl57bbu"/><g class="dt0cm9dhy primary"><path class="k4-c7ob6h"/><path class="u71p-bc5o"/><path class="pweliwddp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:calendar-arrow-up-duo"} {...others} />);
}

export default Component;
