import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n04szjpnk.css';
import '../../css/h/hntgybcog.css';
import '../../css/y/y0pjkbb8q.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGU06AidGb" class="n04szjpnk"/></defs><g class="hntgybcog"><use href="#SVGU06AidGb"/><use href="#SVGU06AidGb"/><path class="y0pjkbb8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:circle-half-circle"} {...others} />);
}

export default Component;
