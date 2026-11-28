import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x2af5cbuv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gw_btbw0f.css';
import '../../css/e/ec8kokbmw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary x2af5cbuv"/><g class="dt0cm9dhy primary"><path class="gw_btbw0f"/><path class="ec8kokbmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:comma-duo"} {...others} />);
}

export default Component;
