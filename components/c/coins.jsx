import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/elk25cc6y.css';
import '../../css/m/morcw3b2l.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="elk25cc6y"/><path class="morcw3b2l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:coins"} {...others} />);
}

export default Component;
