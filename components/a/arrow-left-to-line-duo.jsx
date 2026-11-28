import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h3rqpkjxm.css';
import '../../css/p/pbhf4ibgw.css';
import '../../css/l/lv1lbhbdn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="h3rqpkjxm"/><path class="pbhf4ibgw"/><path class="lv1lbhbdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-left-to-line-duo"} {...others} />);
}

export default Component;
