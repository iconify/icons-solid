import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/i/ihzi3cc6z.css';
import '../../css/b/bqg2wqb9b.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="ihzi3cc6z"/><path class="bqg2wqb9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:coin"} {...others} />);
}

export default Component;
