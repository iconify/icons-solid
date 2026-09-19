import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2i38iq9n.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x681dpbcn.css';
import '../../css/i/i0xkg4bfy.css';
import '../../css/z/zgle2b51t.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><path id="SVG45VKsbNC" class="o2i38iq9n"/></defs><g class="cuyn6tgcc"><path class="x681dpbcn"/><use href="#SVG45VKsbNC"/><use href="#SVG45VKsbNC" class="i0xkg4bfy"/><path class="zgle2b51t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:ceylon-wordmark"} {...others} />);
}

export default Component;
