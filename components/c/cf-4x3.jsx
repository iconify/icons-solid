import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f0myssbxe.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fzd9y-d6e.css';
import '../../css/u/u3gnm8xgy.css';
import '../../css/r/rbl3a3z3v.css';
import '../../css/t/tvn_9t6om.css';
import '../../css/h/hts5cj0-t.css';
import '../../css/a/a1ijyqsfw.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVGn14qkdTH"><path class="f0myssbxe"/></clipPath></defs><g clip-path="url(#SVGn14qkdTH)" transform="translate(12.4 -32)" class="d2kvgvbvc"><path class="fzd9y-d6e"/><path class="u3gnm8xgy"/><path class="rbl3a3z3v"/><path class="tvn_9t6om"/><path class="hts5cj0-t"/><path class="a1ijyqsfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:cf-4x3"} {...others} />);
}

export default Component;
