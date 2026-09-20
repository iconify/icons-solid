import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ujmezac8f.css';
import '../../css/u/uc5h60_4s.css';
import '../../css/j/jbbepsbec.css';
import '../../css/j/jr-mhbc2l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ujmezac8f"/><path class="uc5h60_4s"/><path class="jbbepsbec"/><path class="jr-mhbc2l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:chromecast-solid-expressive"} {...others} />);
}

export default Component;
