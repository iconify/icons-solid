import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/c/cciu9be0h.css';
import '../../css/u/uygs5vd8s.css';
import '../../css/b/b6_2-wbpu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="cciu9be0h"/><path class="uygs5vd8s"/><path class="b6_2-wbpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:arhives-group-docks-light"} {...others} />);
}

export default Component;
