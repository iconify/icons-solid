import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ik6x-m28o.css';
import '../../css/a/aw-y6obss.css';
import '../../css/u/un073yd9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ik6x-m28o"/><path class="aw-y6obss"/><path clip-rule="evenodd" class="un073yd9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:info-square-outline"} {...others} />);
}

export default Component;
