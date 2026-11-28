import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x3k-zm7mc.css';
import '../../css/k/kg9gciblh.css';
import '../../css/r/rgjqzacvp.css';
import '../../css/q/que8_rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="x3k-zm7mc"/><path class="kg9gciblh"/><circle class="rgjqzacvp"/><path class="que8_rbvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:id-badge"} {...others} />);
}

export default Component;
