import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/po5m23bou.css';
import '../../css/g/gu7_kybif.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="po5m23bou"/><path class="gu7_kybif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:battery-charging-solid"} {...others} />);
}

export default Component;
