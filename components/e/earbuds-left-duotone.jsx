import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fm3s1pbab.css';
import '../../css/r/rqpzphbav.css';
import '../../css/a/a4hlfkb_j.css';
import '../../css/x/xvfitnbho.css';
import '../../css/u/uglckyvxh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="fm3s1pbab"/><path clip-rule="evenodd" class="rqpzphbav"/><path class="a4hlfkb_j"/><path class="xvfitnbho"/><path clip-rule="evenodd" class="uglckyvxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:earbuds-left-duotone"} {...others} />);
}

export default Component;
