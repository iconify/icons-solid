import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/srvpi8mld.css';
import '../../css/r/rtgzoobsw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="srvpi8mld"/><path class="rtgzoobsw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:toggle-right"} {...others} />);
}

export default Component;
