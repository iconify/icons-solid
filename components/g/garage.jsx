import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wbizk1a7x.css';
import '../../css/i/ip79ax0mg.css';
import '../../css/l/lwawacbpy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wbizk1a7x"/><path class="ip79ax0mg"/><path class="lwawacbpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:garage"} {...others} />);
}

export default Component;
