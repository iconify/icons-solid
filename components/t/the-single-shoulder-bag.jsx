import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/t1gn-ub0x.css';
import '../../css/y/ygvy3bc8x.css';
import '../../css/p/p0-d5wjlw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="t1gn-ub0x"/><rect class="ygvy3bc8x"/><path class="p0-d5wjlw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:the-single-shoulder-bag"} {...others} />);
}

export default Component;
