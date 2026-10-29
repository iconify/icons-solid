import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lf-l1gbwa.css';
import '../../css/u/u3u6a8b0i.css';
import '../../css/i/iieeedbrs.css';
import '../../css/n/n6y6-qb3g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="lf-l1gbwa"/><path class="u3u6a8b0i wm-a"/><path class="iieeedbrs"/><path class="n6y6-qb3g wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:toran"} {...others} />);
}

export default Component;
