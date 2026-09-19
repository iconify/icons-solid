import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/p/pxigoteko.css';
import '../../css/n/n0z6nacxt.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="to0c2ub7t"><path clip-rule="evenodd" class="pxigoteko"/><path class="n0z6nacxt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:enter"} {...others} />);
}

export default Component;
