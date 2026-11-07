import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_scq114p.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/e/ed016ybbg.css';
import '../../css/y/yswxml9zk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="y_scq114p"/><g class="xtpeb-edw"><path class="ed016ybbg"/><path class="yswxml9zk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:walking-round-bold-duotone"} {...others} />);
}

export default Component;
