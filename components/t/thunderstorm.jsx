import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/w5etd2brv.css';
import '../../css/u/u2jir3buv.css';
import '../../css/g/gr9gw9bzh.css';
import '../../css/o/ookflcb1t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="w5etd2brv"/><path class="u2jir3buv"/><path class="gr9gw9bzh"/><path class="ookflcb1t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:thunderstorm"} {...others} />);
}

export default Component;
