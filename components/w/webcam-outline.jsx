import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zwbvgkmqi.css';
import '../../css/d/diqh2cabn.css';
import '../../css/y/yytokuy6x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zwbvgkmqi"/><path class="diqh2cabn"/><path clip-rule="evenodd" class="yytokuy6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:webcam-outline"} {...others} />);
}

export default Component;
