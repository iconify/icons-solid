import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sbmqfhzny.css';
import '../../css/i/iat6s90ft.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/s/sjb0kabnr.css';
import '../../css/e/ezby3sblm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="sbmqfhzny"/><path class="iat6s90ft"/><g class="mc2zb0bvp"><path class="sjb0kabnr"/><path class="ezby3sblm"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ranking-bold-duotone"} {...others} />);
}

export default Component;
