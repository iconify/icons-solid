import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d7no7bcip.css';
import '../../css/n/n04szjpnk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d7no7bcip"/><path class="n04szjpnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:arrow-left-circle"} {...others} />);
}

export default Component;
