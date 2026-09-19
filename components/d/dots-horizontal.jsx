import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rwdyu4blt.css';
import '../../css/s/skr69mb3d.css';
import '../../css/t/t-n--fb8n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><rect class="rwdyu4blt"/><rect class="skr69mb3d"/><rect class="t-n--fb8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:dots-horizontal"} {...others} />);
}

export default Component;
