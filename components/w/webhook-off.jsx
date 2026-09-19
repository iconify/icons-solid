import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nwy4dtkhf.css';
import '../../css/l/l8kl8krke.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nwy4dtkhf"/><path class="l8kl8krke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:webhook-off"} {...others} />);
}

export default Component;
