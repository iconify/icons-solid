import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/m1mh2gbyt.css';
import '../../css/x/xuyahubhm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="m1mh2gbyt"/><path class="xuyahubhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:sort-down-light"} {...others} />);
}

export default Component;
