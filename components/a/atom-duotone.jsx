import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w44drjixu.css';
import '../../css/o/own158bqy.css';
import '../../css/y/y91gvol1h.css';
import '../../css/c/c6fmq-bzx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w44drjixu"/><path class="own158bqy"/><path class="y91gvol1h"/><path class="c6fmq-bzx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:atom-duotone"} {...others} />);
}

export default Component;
