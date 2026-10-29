import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wip-y485t.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/h/hzwzm3bji.css';
import '../../css/s/s2uhgxbuo.css';
import '../../css/r/rem2xi-az.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wip-y485t wm-deco"/><path class="sdaucgb_l wm-deco"/><path class="hzwzm3bji wm-k"/><path class="s2uhgxbuo wm-a"/><path class="rem2xi-az wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:glass-water-blueprint"} {...others} />);
}

export default Component;
