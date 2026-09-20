import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/th240zbjx.css';
import '../../css/l/ll2wlbm4o.css';
import '../../css/p/p501uebdq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="th240zbjx"/><path class="ll2wlbm4o"/><path class="p501uebdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:device-message-filled"} {...others} />);
}

export default Component;
