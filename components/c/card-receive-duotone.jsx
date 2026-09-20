import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t9im77xci.css';
import '../../css/p/p0til8bxh.css';
import '../../css/z/zjapeywkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="t9im77xci"/><path clip-rule="evenodd" class="p0til8bxh"/><path class="zjapeywkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:card-receive-duotone"} {...others} />);
}

export default Component;
