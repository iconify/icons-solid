import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/spikp7boj.css';
import '../../css/m/mxutx8bjy.css';
import '../../css/p/pvcdc057u.css';
import '../../css/m/m49a1tu-b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="spikp7boj"/><path class="mxutx8bjy"/><path class="pvcdc057u"/><path class="m49a1tu-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:roundcube"} {...others} />);
}

export default Component;
