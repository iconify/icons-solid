import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e3q5gacib.css';
import '../../css/z/zkxlt7buh.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="e3q5gacib"/><path class="zkxlt7buh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:building-fill-gear"} {...others} />);
}

export default Component;
