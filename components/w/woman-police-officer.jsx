import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c4uv9zdqg.css';
import '../../css/g/gih5xobsq.css';
import '../../css/h/ho68_xb_k.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="c4uv9zdqg"/><path class="gih5xobsq"/><path class="ho68_xb_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-police-officer"} {...others} />);
}

export default Component;
