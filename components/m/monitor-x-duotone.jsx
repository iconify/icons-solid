import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sk78vjtmq.css';
import '../../css/y/yjlljib5h.css';
import '../../css/k/ks1ls910s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sk78vjtmq"/><path class="yjlljib5h"/><path class="ks1ls910s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:monitor-x-duotone"} {...others} />);
}

export default Component;
