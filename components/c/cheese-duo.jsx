import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2d3of8ot.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nl_qurb3s.css';
import '../../css/k/kf2fi9bdy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k2d3of8ot secondary"/><g class="dt0cm9dhy primary"><path class="nl_qurb3s"/><path class="kf2fi9bdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cheese-duo"} {...others} />);
}

export default Component;
