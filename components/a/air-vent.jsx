import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xbzieqlfa.css';
import '../../css/z/zqzkvhb0y.css';
import '../../css/x/xgqg6zbls.css';
import '../../css/i/irssdgb_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow xbzieqlfa"/><path class="zqzkvhb0y"/><path class="xgqg6zbls"/><path class="irssdgb_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:air-vent"} {...others} />);
}

export default Component;
