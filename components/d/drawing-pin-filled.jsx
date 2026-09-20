import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tb3u9ab5j.css';
import '../../css/c/cuyn6tgcc.css';

const viewBox = {"width":15,"height":15};
const content = `<defs><path id="SVGgE5gcbVy" class="tb3u9ab5j"/></defs><g class="cuyn6tgcc"><use href="#SVGgE5gcbVy"/><use href="#SVGgE5gcbVy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:drawing-pin-filled"} {...others} />);
}

export default Component;
