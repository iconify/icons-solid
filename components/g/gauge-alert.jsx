import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rch4b20wr.css';
import '../../css/m/mzvx1_v6v.css';
import '../../css/k/ktnm9mblm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="rch4b20wr"/><path class="mzvx1_v6v"/><path class="ktnm9mblm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:gauge-alert"} {...others} />);
}

export default Component;
