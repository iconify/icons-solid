import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xvbhu7r3a.css';
import '../../css/m/m2m47owqp.css';
import '../../css/y/yirxaabex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xvbhu7r3a"/><path class="m2m47owqp"/><path class="yirxaabex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:global-linear"} {...others} />);
}

export default Component;
