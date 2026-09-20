import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/twwywab3d.css';
import '../../css/y/yb6sm-ooh.css';
import '../../css/y/yuarjw60h.css';
import '../../css/r/r4a6gmadf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="twwywab3d"/><path class="yb6sm-ooh"/><path clip-rule="evenodd" class="yuarjw60h"/><path class="r4a6gmadf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cardholder-duotone"} {...others} />);
}

export default Component;
