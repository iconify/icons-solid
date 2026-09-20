import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqr06mblf.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cvba9qpke.css';

const viewBox = {"width":15,"height":15};
const content = `<defs><path id="SVGr9eWYbHE" class="iqr06mblf"/></defs><mask id="SVGvH4ZXd9x" class="cuyn6tgcc"><use href="#SVGr9eWYbHE"/></mask><g class="cuyn6tgcc"><use href="#SVGr9eWYbHE"/><path mask="url(#SVGvH4ZXd9x)" class="cvba9qpke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:panel-left-minimized"} {...others} />);
}

export default Component;
