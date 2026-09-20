import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g95ndgrnv.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nkc4t8bfx.css';

const viewBox = {"width":15,"height":15};
const content = `<defs><path id="SVGpPI6ccam" class="g95ndgrnv"/></defs><mask id="SVGVEeC1biv" class="cuyn6tgcc"><use href="#SVGpPI6ccam"/></mask><g class="cuyn6tgcc"><use href="#SVGpPI6ccam"/><path mask="url(#SVGVEeC1biv)" class="nkc4t8bfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:panel-bottom"} {...others} />);
}

export default Component;
