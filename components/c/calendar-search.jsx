import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n2rdahbbj.css';
import '../../css/p/pa9tfzbhp.css';
import '../../css/g/go-2udb_l.css';
import '../../css/p/pk83bcugo.css';
import '../../css/g/g2wi83bvq.css';
import '../../css/g/g7tetcchw.css';
import '../../css/y/y87i71szz.css';
import '../../css/d/d_gnmqwks.css';
import '../../css/a/a6qf5eb-p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="n2rdahbbj wm-shadow"/><path class="pa9tfzbhp"/><path class="go-2udb_l"/><path class="pk83bcugo"/><path class="g2wi83bvq"/><path class="g7tetcchw wm-s"/><path class="wm-s y87i71szz"/><path class="d_gnmqwks"/><path class="a6qf5eb-p wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:calendar-search"} {...others} />);
}

export default Component;
