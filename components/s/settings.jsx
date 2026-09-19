import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/q/qoehezbdc.css';
import '../../css/b/b1_u0pbjf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="qoehezbdc"/><path class="b1_u0pbjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:settings"} {...others} />);
}

export default Component;
