import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qrgc488qh.css';
import '../../css/n/nl0gnobci.css';
import '../../css/v/v2ukonb-w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="qrgc488qh"/><path class="nl0gnobci wm-s"/><path class="v2ukonb-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:map-pin-plus-duo"} {...others} />);
}

export default Component;
