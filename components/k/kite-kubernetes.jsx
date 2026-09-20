import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/atu1vi6wn.css';
import '../../css/q/qkur7vboz.css';
import '../../css/r/rm2rrp8qs.css';
import '../../css/s/s_-nslbiu.css';
import '../../css/f/ffrfwr2dj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="atu1vi6wn"/><path class="qkur7vboz"/><path class="rm2rrp8qs"/><path class="s_-nslbiu"/><path class="ffrfwr2dj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kite-kubernetes"} {...others} />);
}

export default Component;
