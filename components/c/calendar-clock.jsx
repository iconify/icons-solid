import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gqvbn8b1h.css';
import '../../css/p/pa9tfzbhp.css';
import '../../css/g/go-2udb_l.css';
import '../../css/p/pk83bcugo.css';
import '../../css/g/g2wi83bvq.css';
import '../../css/k/kun7kcbmu.css';
import '../../css/m/mg5mdccpe.css';
import '../../css/y/y9r8s3juy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="gqvbn8b1h wm-shadow"/><path class="pa9tfzbhp"/><path class="go-2udb_l"/><path class="pk83bcugo"/><path class="g2wi83bvq"/><path class="kun7kcbmu wm-s"/><path class="mg5mdccpe"/><path class="wm-s y9r8s3juy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:calendar-clock"} {...others} />);
}

export default Component;
