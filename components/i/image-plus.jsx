import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h5pr_z6bn.css';
import '../../css/s/s-jb70brq.css';
import '../../css/u/udv7uo4ie.css';
import '../../css/k/kf_rwdjlo.css';
import '../../css/r/r7481-bgb.css';
import '../../css/j/ji9jdqbyf.css';
import '../../css/l/lhoyz1h3q.css';
import '../../css/j/jdmbkdb0v.css';
import '../../css/k/k3h_-7zgl.css';
import '../../css/w/w31msjb6d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h5pr_z6bn wm-k"/><path class="s-jb70brq wm-s"/><path class="udv7uo4ie wm-deco"/><path class="kf_rwdjlo wm-k"/><path class="r7481-bgb wm-k"/><path class="ji9jdqbyf wm-s"/><path class="lhoyz1h3q wm-shadow"/><path class="jdmbkdb0v wm-shine"/><path class="k3h_-7zgl wm-shine"/><path class="w31msjb6d wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:image-plus"} {...others} />);
}

export default Component;
