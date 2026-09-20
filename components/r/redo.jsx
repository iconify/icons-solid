import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/y/ypnpm75hx.css';
import '../../css/c/c2ii20bcs.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="ypnpm75hx"/><path class="c2ii20bcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:redo"} {...others} />);
}

export default Component;
