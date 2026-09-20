import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n2bqh3b5p.css';
import '../../css/n/n04szjpnk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="n2bqh3b5p"/><path class="n04szjpnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:chevron-up-right-circle"} {...others} />);
}

export default Component;
