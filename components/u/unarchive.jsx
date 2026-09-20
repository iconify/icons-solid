import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/x/x24pylx4h.css';
import '../../css/g/gatvf2ajg.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="x24pylx4h"/><path class="gatvf2ajg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:unarchive"} {...others} />);
}

export default Component;
