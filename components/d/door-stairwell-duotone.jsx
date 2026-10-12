import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kdi8vsbpq.css';
import '../../css/y/yix2arbwd.css';
import '../../css/p/pukd_r9hx.css';
import '../../css/x/x3u1419yc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kdi8vsbpq"/><path class="yix2arbwd"/><path class="pukd_r9hx"/><path class="x3u1419yc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:door-stairwell-duotone"} {...others} />);
}

export default Component;
