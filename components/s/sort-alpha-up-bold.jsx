import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kdfbz6i8l.css';
import '../../css/x/xu0one_4p.css';
import '../../css/b/boxfqhb0s.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="kdfbz6i8l"/><path class="xu0one_4p"/><path class="boxfqhb0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sort-alpha-up-bold"} {...others} />);
}

export default Component;
