import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/twame7b2s.css';
import '../../css/m/myxf3373x.css';
import '../../css/h/hbvgbz8qr.css';
import '../../css/h/h2t2ttb1z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="twame7b2s"/><path class="myxf3373x"/><path clip-rule="evenodd" class="hbvgbz8qr"/><path class="h2t2ttb1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:users2"} {...others} />);
}

export default Component;
