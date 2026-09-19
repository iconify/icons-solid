import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/iilu_nblt.css';
import '../../css/w/wxz1r3brh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="iilu_nblt"/><path class="wxz1r3brh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:pharmacy"} {...others} />);
}

export default Component;
