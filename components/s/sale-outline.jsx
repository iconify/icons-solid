import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cf__iaczl.css';
import '../../css/i/ib6x-x2vz.css';
import '../../css/e/ei2yowyoq.css';
import '../../css/x/x1vgw5b7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cf__iaczl"/><path clip-rule="evenodd" class="ib6x-x2vz"/><path class="ei2yowyoq"/><path class="x1vgw5b7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sale-outline"} {...others} />);
}

export default Component;
