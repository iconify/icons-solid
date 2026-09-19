import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gy85065lx.css';
import '../../css/u/u7sjykb1e.css';
import '../../css/o/onyqr8g1f.css';
import '../../css/y/yei7kmfgc.css';
import '../../css/t/tii6inn6s.css';
import '../../css/u/u1bmbxbnh.css';
import '../../css/c/chmcmpb2b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gy85065lx"/><path class="u7sjykb1e"/><path class="onyqr8g1f"/><path class="yei7kmfgc"/><path class="tii6inn6s"/><path class="u1bmbxbnh"/><path class="chmcmpb2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:sk-1x1"} {...others} />);
}

export default Component;
