import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/j/j_y4bqb2g.css';
import '../../css/v/vqlyovgcs.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="j_y4bqb2g"/><path class="vqlyovgcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:clipboard"} {...others} />);
}

export default Component;
