import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/n/ntmzopbav.css';
import '../../css/m/mrbs-czzf.css';
import '../../css/e/eee98mk-t.css';
import '../../css/n/nryqp7bir.css';
import '../../css/u/uoe2zhb4w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="ntmzopbav"/><path class="mrbs-czzf"/><path class="eee98mk-t"/><path class="nryqp7bir"/><path class="uoe2zhb4w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:id-card"} {...others} />);
}

export default Component;
