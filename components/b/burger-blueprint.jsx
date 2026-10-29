import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xq76mzbiq.css';
import '../../css/p/pc9e0cboq.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/r/rp7aos2hs.css';
import '../../css/a/a8f5zq5mq.css';
import '../../css/x/xl00l78zl.css';
import '../../css/u/uc20y_bwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco xq76mzbiq"/><path class="pc9e0cboq wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="rp7aos2hs wm-k"/><path class="a8f5zq5mq wm-a"/><path class="wm-k xl00l78zl"/><path class="uc20y_bwc wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:burger-blueprint"} {...others} />);
}

export default Component;
