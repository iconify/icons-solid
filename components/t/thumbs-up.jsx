import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/j/jg3l880xk.css';
import '../../css/g/gr1gdh12t.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="jg3l880xk"/><path class="gr1gdh12t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:thumbs-up"} {...others} />);
}

export default Component;
