import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8ohewbfz.css';
import '../../css/c/cuyn6tgcc.css';

const viewBox = {"width":16,"height":16};
const content = `<defs><path id="SVG67go7b2R" class="s8ohewbfz"/></defs><g class="cuyn6tgcc"><use href="#SVG67go7b2R"/><use href="#SVG67go7b2R"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:apple"} {...others} />);
}

export default Component;
