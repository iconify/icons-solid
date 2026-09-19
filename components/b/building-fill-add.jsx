import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/al1vx9b6x.css';
import '../../css/e/e3q5gacib.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="al1vx9b6x"/><path class="e3q5gacib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:building-fill-add"} {...others} />);
}

export default Component;
