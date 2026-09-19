import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hg33t-y6h.css';
import '../../css/w/w1qjm_bxc.css';
import '../../css/x/xxyrx4b1q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="hg33t-y6h"/><path class="w1qjm_bxc"/><path class="xxyrx4b1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:magnet"} {...others} />);
}

export default Component;
