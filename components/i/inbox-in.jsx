import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f81oufbuc.css';
import '../../css/e/e-0caybdp.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="f81oufbuc"/><path class="e-0caybdp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:inbox-in"} {...others} />);
}

export default Component;
