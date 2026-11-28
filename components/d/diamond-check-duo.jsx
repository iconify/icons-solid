import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qs0n83b1m.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qyvn42bbq.css';
import '../../css/w/w6tk1ibru.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qs0n83b1m secondary"/><g class="dt0cm9dhy primary"><path class="qyvn42bbq"/><path class="w6tk1ibru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:diamond-check-duo"} {...others} />);
}

export default Component;
