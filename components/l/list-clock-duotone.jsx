import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lybztmbkc.css';
import '../../css/z/zkh_48bqp.css';
import '../../css/y/ycoqy4zfy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lybztmbkc"/><path class="zkh_48bqp"/><path class="ycoqy4zfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:list-clock-duotone"} {...others} />);
}

export default Component;
