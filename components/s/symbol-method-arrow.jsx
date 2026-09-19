import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o1dzi7biv.css';
import '../../css/q/qtsnc0bxz.css';
import '../../css/b/bau06jt7d.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="o1dzi7biv"/><path class="qtsnc0bxz"/><path class="bau06jt7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:symbol-method-arrow"} {...others} />);
}

export default Component;
