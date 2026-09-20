import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/l/le0f1-32h.css';
import '../../css/s/slmdhsbqf.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="le0f1-32h"/><path class="slmdhsbqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:bag"} {...others} />);
}

export default Component;
