import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/evsml8bnv.css';
import '../../css/b/b6fgnqb9t.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="evsml8bnv"/><path class="b6fgnqb9t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:link"} {...others} />);
}

export default Component;
