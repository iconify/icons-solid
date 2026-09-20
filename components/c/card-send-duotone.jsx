import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n2jxbkb8j.css';
import '../../css/d/dnyemccis.css';
import '../../css/z/zjapeywkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="n2jxbkb8j"/><path clip-rule="evenodd" class="dnyemccis"/><path class="zjapeywkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:card-send-duotone"} {...others} />);
}

export default Component;
