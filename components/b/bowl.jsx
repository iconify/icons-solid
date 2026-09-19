import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/kwtq3-b7n.css';
import '../../css/n/nzwwa46rk.css';
import '../../css/h/hth7h0qpl.css';
import '../../css/o/ohxepo72q.css';
import '../../css/g/gl5lthq6h.css';
import '../../css/n/ncgx2ds3u.css';
import '../../css/w/w2kq20byj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="kwtq3-b7n"/><path class="nzwwa46rk"/><path class="hth7h0qpl"/><path class="ohxepo72q"/><path class="gl5lthq6h"/><path class="ncgx2ds3u"/><path class="w2kq20byj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bowl"} {...others} />);
}

export default Component;
