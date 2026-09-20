import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ai7m974dg.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lgb4f-pur.css';

const viewBox = {"width":15,"height":15};
const content = `<defs><path id="SVGzlrrcbgz" class="ai7m974dg"/></defs><mask id="SVGoefgPbdu" class="cuyn6tgcc"><use href="#SVGzlrrcbgz"/></mask><g class="cuyn6tgcc"><use href="#SVGzlrrcbgz"/><path mask="url(#SVGoefgPbdu)" class="lgb4f-pur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:panel-left"} {...others} />);
}

export default Component;
