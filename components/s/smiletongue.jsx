import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7269db2g.css';
import '../../css/l/lmrf6zs5l.css';
import '../../css/y/y1ig9vb1s.css';
import '../../css/s/s92dlccok.css';
import '../../css/p/pxpgiw7hy.css';
import '../../css/w/wegr_lbpd.css';
import '../../css/i/igopaeb6d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i7269db2g"/><path class="lmrf6zs5l"/><path class="y1ig9vb1s"/><path class="s92dlccok"/><path class="pxpgiw7hy"/><path class="wegr_lbpd"/><path class="igopaeb6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:smiletongue"} {...others} />);
}

export default Component;
