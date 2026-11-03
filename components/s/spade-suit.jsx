import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wl_075bhu.css';
import '../../css/d/dpsiiab0r.css';
import '../../css/x/xs8xf5a_d.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/w/wewcxs-cp.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGwAHd8dmh" class="wl_075bhu"/></defs><g class="dpsiiab0r"><path class="xs8xf5a_d"/><use href="#SVGwAHd8dmh"/></g><g class="jn8qy4bru"><path class="wewcxs-cp"/><use href="#SVGwAHd8dmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:spade-suit"} {...others} />);
}

export default Component;
