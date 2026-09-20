import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wc4hlc93o.css';
import '../../css/o/owownebqn.css';
import '../../css/u/ubbj1pldi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wc4hlc93o"/><path class="owownebqn"/><path class="ubbj1pldi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:plate"} {...others} />);
}

export default Component;
