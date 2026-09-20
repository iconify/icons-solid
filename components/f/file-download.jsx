import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/e/et1cq6y1f.css';
import '../../css/f/f3_4zuk_q.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="et1cq6y1f"/><path class="f3_4zuk_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:file-download"} {...others} />);
}

export default Component;
