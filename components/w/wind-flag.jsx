import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/x/x1ag1jb0m.css';
import '../../css/i/i6nbdpb2r.css';
import '../../css/b/by0rrjntu.css';
import '../../css/a/a33k4qm3v.css';
import '../../css/s/sf352t14o.css';
import '../../css/r/r2hs9-v7m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="x1ag1jb0m"/><path class="i6nbdpb2r"/><path class="by0rrjntu"/><path class="a33k4qm3v"/><path class="sf352t14o"/><path class="r2hs9-v7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:wind-flag"} {...others} />);
}

export default Component;
