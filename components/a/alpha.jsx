import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2ru7lcwo.css';
import '../../css/c/cuyn6tgcc.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGgxWCtbkt" class="g2ru7lcwo"/></defs><g class="cuyn6tgcc"><use href="#SVGgxWCtbkt"/><use href="#SVGgxWCtbkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:alpha"} {...others} />);
}

export default Component;
