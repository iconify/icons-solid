import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8ffwrbpp.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vwqu088iv.css';
import '../../css/i/ige5ecbiu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k8ffwrbpp secondary"/><g class="dt0cm9dhy primary"><path class="vwqu088iv"/><path class="ige5ecbiu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cylinder-duo"} {...others} />);
}

export default Component;
