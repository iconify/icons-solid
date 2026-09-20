import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dilm5cb8z.css';
import '../../css/k/ktk7rfg2u.css';
import '../../css/v/vyxuym72m.css';
import '../../css/c/c_ime9bag.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="cuyn6tgcc"><path class="dilm5cb8z"/><g class="ktk7rfg2u"><path class="vyxuym72m"/><path class="c_ime9bag"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:clojurescript"} {...others} />);
}

export default Component;
