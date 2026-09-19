import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q9ielab0e.css';
import '../../css/r/rruv79bki.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="q9ielab0e"/><path class="rruv79bki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:sign-railroad"} {...others} />);
}

export default Component;
