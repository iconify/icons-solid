import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/l_b2deb8g.css';
import '../../css/z/zzmu7n0ik.css';
import '../../css/h/hpkemxbxl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="l_b2deb8g"/><path class="zzmu7n0ik"/><path class="hpkemxbxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:level-nine-title"} {...others} />);
}

export default Component;
