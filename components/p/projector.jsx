import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r3a9rrblo.css';
import '../../css/g/g8cxpzb4j.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="r3a9rrblo"/><path class="g8cxpzb4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:projector"} {...others} />);
}

export default Component;
