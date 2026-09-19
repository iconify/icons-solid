import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/v3isqk9rk.css';
import '../../css/z/zo4tmnb2u.css';
import '../../css/v/vciwbj1pb.css';
import '../../css/n/ns8qcgbbq.css';
import '../../css/f/ffz9x3brf.css';
import '../../css/z/z3jrf0f3r.css';
import '../../css/v/vvau06blw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="v3isqk9rk"/><path class="zo4tmnb2u"/><path class="vciwbj1pb"/><path class="ns8qcgbbq"/><path class="ffz9x3brf"/><path class="z3jrf0f3r"/><path class="vvau06blw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:arithmetic-one"} {...others} />);
}

export default Component;
