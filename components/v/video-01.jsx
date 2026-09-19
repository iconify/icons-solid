import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tz_gf3e9g.css';
import '../../css/f/f0gpxfb_w.css';
import '../../css/e/eturhmkap.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="tz_gf3e9g"/><path class="f0gpxfb_w"/><circle class="eturhmkap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:video-01"} {...others} />);
}

export default Component;
