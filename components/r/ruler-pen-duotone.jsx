import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ejo52khxn.css';
import '../../css/h/hmwu_nbej.css';
import '../../css/h/hlmlrw03c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ejo52khxn"/><path class="hmwu_nbej"/><path class="hlmlrw03c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:ruler-pen-duotone"} {...others} />);
}

export default Component;
