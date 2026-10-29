import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/qrwzcbwle.css';
import '../../css/a/a4--3qb_l.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/a/at3dhwbti.css';
import '../../css/e/eenrhvbed.css';
import '../../css/h/hxwh25_5k.css';
import '../../css/y/yyvtfebob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="qrwzcbwle wm-deco"/><path class="a4--3qb_l wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="at3dhwbti wm-k"/><path class="eenrhvbed wm-a"/><path class="hxwh25_5k wm-s"/><path class="wm-k yyvtfebob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sunset-blueprint"} {...others} />);
}

export default Component;
