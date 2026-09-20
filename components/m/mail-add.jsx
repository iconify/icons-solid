import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/q/qc7ezwbyq.css';
import '../../css/j/j9twswbny.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="qc7ezwbyq"/><path class="j9twswbny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:mail-add"} {...others} />);
}

export default Component;
