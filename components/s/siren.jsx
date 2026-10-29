import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cf3r_sbav.css';
import '../../css/e/eabrejb-b.css';
import '../../css/b/bb1fxfm3v.css';
import '../../css/b/b6bhgow4e.css';
import '../../css/f/f_hk9ybww.css';
import '../../css/p/pf2qusb8d.css';
import '../../css/a/aw12tbbeb.css';
import '../../css/e/eu9xm7p0k.css';
import '../../css/t/to5q6infx.css';
import '../../css/r/rwi8lmbeh.css';
import '../../css/f/f-zufrblo.css';
import '../../css/n/n3t66ib5q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cf3r_sbav wm-shadow"/><path class="eabrejb-b wm-k"/><path class="bb1fxfm3v wm-k"/><path class="b6bhgow4e wm-k"/><path class="f_hk9ybww wm-k"/><path class="pf2qusb8d wm-k"/><path class="aw12tbbeb wm-k"/><path class="eu9xm7p0k wm-k"/><path class="to5q6infx wm-k"/><path class="rwi8lmbeh wm-k"/><path class="f-zufrblo wm-shine"/><path class="n3t66ib5q wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:siren"} {...others} />);
}

export default Component;
