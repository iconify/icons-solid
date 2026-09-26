import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/adr88jbib.css';
import '../../css/j/j4-u4dbux.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="adr88jbib"/><path class="j4-u4dbux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:ring-with-gem"} {...others} />);
}

export default Component;
