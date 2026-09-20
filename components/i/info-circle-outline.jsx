import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aw-y6obss.css';
import '../../css/i/irnyb8bbi.css';
import '../../css/w/wuvczemwq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="aw-y6obss"/><path class="irnyb8bbi"/><path clip-rule="evenodd" class="wuvczemwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:info-circle-outline"} {...others} />);
}

export default Component;
