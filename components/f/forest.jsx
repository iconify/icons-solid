import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-g8wbgam.css';
import '../../css/c/cuyn6tgcc.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><path id="SVGwVnWtYIz" class="e-g8wbgam"/></defs><g class="cuyn6tgcc"><use href="#SVGwVnWtYIz"/><use href="#SVGwVnWtYIz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:forest"} {...others} />);
}

export default Component;
