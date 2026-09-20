import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mj85gacfc.css';
import '../../css/s/s-zjnu17c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mj85gacfc"/><path clip-rule="evenodd" class="s-zjnu17c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:bell"} {...others} />);
}

export default Component;
