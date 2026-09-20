import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jh2os9osm.css';
import '../../css/i/i4kjgjbmy.css';
import '../../css/z/zhfkr5_ve.css';
import '../../css/q/quvw9vbbq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jh2os9osm"/><path clip-rule="evenodd" class="i4kjgjbmy"/><path class="zhfkr5_ve"/><path class="quvw9vbbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:shop-duotone"} {...others} />);
}

export default Component;
