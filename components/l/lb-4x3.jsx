import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8i3-uijz.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/d/dbzvkifjm.css';
import '../../css/u/usk3os3yu.css';
import '../../css/l/l52f6kb5t.css';
import '../../css/g/gvvhyqbwu.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVG7yqWtbFV"><path class="t8i3-uijz"/></clipPath></defs><g clip-path="url(#SVG7yqWtbFV)" transform="translate(80)scale(.9375)"><g class="nv9qcacyl"><path class="dbzvkifjm"/><path class="usk3os3yu"/></g><path class="l52f6kb5t"/><path class="gvvhyqbwu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:lb-4x3"} {...others} />);
}

export default Component;
