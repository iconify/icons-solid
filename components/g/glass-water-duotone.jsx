import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bbbewhblq.css';
import '../../css/n/n78umdbee.css';
import '../../css/d/dnc9b5rkc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bbbewhblq"/><path class="n78umdbee"/><path class="dnc9b5rkc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:glass-water-duotone"} {...others} />);
}

export default Component;
