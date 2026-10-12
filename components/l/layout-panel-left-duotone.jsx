import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pq-mt92dg.css';
import '../../css/b/b13w1nhed.css';
import '../../css/x/x0x96ubmz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pq-mt92dg"/><path class="b13w1nhed"/><path class="x0x96ubmz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:layout-panel-left-duotone"} {...others} />);
}

export default Component;
