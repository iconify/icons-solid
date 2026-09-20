import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/n/nbcrakb3b.css';
import '../../css/f/f6jh06l4x.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="nbcrakb3b"/><path class="f6jh06l4x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:document-stack"} {...others} />);
}

export default Component;
