import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dvv3v5pfz.css';
import '../../css/o/oh3q4ebdx.css';
import '../../css/q/qdnm17w9y.css';
import '../../css/h/hbiqkm9hq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dvv3v5pfz"/><path clip-rule="evenodd" class="oh3q4ebdx"/><path class="qdnm17w9y"/><path class="hbiqkm9hq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-2-bold"} {...others} />);
}

export default Component;
