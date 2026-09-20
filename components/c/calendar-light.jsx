import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/pcbu8kb2s.css';
import '../../css/y/yl1f35bbo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><rect class="pcbu8kb2s"/><path class="yl1f35bbo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:calendar-light"} {...others} />);
}

export default Component;
