import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/c/chegubbiq.css';
import '../../css/y/ybum0287x.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="chegubbiq"/><path class="ybum0287x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:jump-backward"} {...others} />);
}

export default Component;
