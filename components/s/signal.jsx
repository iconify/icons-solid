import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hg0768bba.css';
import '../../css/q/q9y26w24q.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="hg0768bba"/><path class="q9y26w24q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:signal"} {...others} />);
}

export default Component;
