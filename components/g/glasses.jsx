import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/js15p6cio.css';
import '../../css/u/unnv8bcwo.css';
import '../../css/j/j96_km02o.css';
import '../../css/h/h554b4tlc.css';
import '../../css/i/i909uh_3u.css';
import '../../css/y/yxjyr2gcg.css';
import '../../css/t/ttj7yib4a.css';
import '../../css/x/xicl0-gup.css';
import '../../css/l/lq4rokpqf.css';
import '../../css/w/wgr67ac0u.css';
import '../../css/f/fne48umcx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="js15p6cio wm-shadow"/><path class="unnv8bcwo"/><path class="j96_km02o"/><path class="h554b4tlc"/><path class="i909uh_3u"/><path class="yxjyr2gcg"/><path class="ttj7yib4a"/><path class="xicl0-gup"/><path class="lq4rokpqf wm-shine"/><path class="wgr67ac0u"/><path class="fne48umcx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:glasses"} {...others} />);
}

export default Component;
