import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/we1jr_06d.css';
import '../../css/t/tz_gf3e9g.css';
import '../../css/f/f0gpxfb_w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="we1jr_06d"/><path class="tz_gf3e9g"/><path class="f0gpxfb_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:video-02"} {...others} />);
}

export default Component;
