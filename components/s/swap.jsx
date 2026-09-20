import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/m/mq6hjubga.css';
import '../../css/i/i6zz6ccrg.css';
import '../../css/j/jztr7pbms.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="mq6hjubga"/><path class="i6zz6ccrg"/><path class="jztr7pbms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:swap"} {...others} />);
}

export default Component;
