import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dwl6o9bjk.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z6fr5jbdm.css';
import '../../css/a/al22mf-8t.css';
import '../../css/h/h99iw7bbj.css';
import '../../css/j/jxshg157z.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVG5j8tqbvj"><path class="dwl6o9bjk"/></clipPath></defs><g clip-path="url(#SVG5j8tqbvj)" transform="translate(12)" class="d2kvgvbvc"><path class="z6fr5jbdm"/><path class="al22mf-8t"/><path class="h99iw7bbj"/><path class="jxshg157z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:bs-4x3"} {...others} />);
}

export default Component;
