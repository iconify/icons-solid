import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/b/b-skqkb4u.css';
import '../../css/b/bx7-f-ado.css';
import '../../css/n/n31w93bqt.css';
import '../../css/i/iv-b-7brm.css';
import '../../css/z/zwuwl9qcj.css';
import '../../css/j/j9n-wgfhi.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><g clip-path="url(#SVGg3D4Hd7H)"><path class="b-skqkb4u"/><path class="bx7-f-ado"/><path class="n31w93bqt"/><path class="iv-b-7brm"/><path class="zwuwl9qcj"/></g><defs><clipPath id="SVGg3D4Hd7H"><path class="j9n-wgfhi"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:lua-light"} {...others} />);
}

export default Component;
