import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/w/wqss8ttiy.css';
import '../../css/g/gw-3o2bdq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="wqss8ttiy"/><path class="gw-3o2bdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:sun"} {...others} />);
}

export default Component;
