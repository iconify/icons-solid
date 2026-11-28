import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h_3iir57o.css';
import '../../css/r/r0pko5bpd.css';
import '../../css/q/qs9m2rbxi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="h_3iir57o"/><path class="r0pko5bpd"/><path class="qs9m2rbxi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:pitcher"} {...others} />);
}

export default Component;
