import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g1v2ue35q.css';
import '../../css/e/e3q5gacib.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="g1v2ue35q"/><path class="e3q5gacib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:building-fill-up"} {...others} />);
}

export default Component;
