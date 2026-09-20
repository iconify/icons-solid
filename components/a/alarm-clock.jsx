import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/n/ngolkzb7r.css';
import '../../css/j/j5rvl2b5l.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="ngolkzb7r"/><path class="j5rvl2b5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:alarm-clock"} {...others} />);
}

export default Component;
