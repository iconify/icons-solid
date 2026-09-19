import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/ti43njbxy.css';
import '../../css/u/uwvkzmbgi.css';
import '../../css/c/cygy2y6yc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ti43njbxy"/><path class="uwvkzmbgi"/><path class="cygy2y6yc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-unlock-01"} {...others} />);
}

export default Component;
