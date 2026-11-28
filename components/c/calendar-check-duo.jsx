import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2wl57bbu.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k4-c7ob6h.css';
import '../../css/w/w7_mhrwuu.css';
import '../../css/t/tzlloac9w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary w2wl57bbu"/><g class="dt0cm9dhy primary"><path class="k4-c7ob6h"/><path class="w7_mhrwuu"/><path class="tzlloac9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:calendar-check-duo"} {...others} />);
}

export default Component;
