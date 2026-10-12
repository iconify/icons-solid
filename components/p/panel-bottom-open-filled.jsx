import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q7wcc782q.css';
import '../../css/r/ru025w_xb.css';
import '../../css/m/mkxykjb-p.css';
import '../../css/e/ea7n6qb6o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q7wcc782q"/><rect transform="rotate(90 21.23 14.65)" class="ru025w_xb"/><rect transform="rotate(90 21.23 2.73)" class="mkxykjb-p"/><path class="ea7n6qb6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:panel-bottom-open-filled"} {...others} />);
}

export default Component;
