import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qijp735rw.css';
import '../../css/e/ekllxobep.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="qijp735rw"/><path class="ekllxobep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:envelope-x"} {...others} />);
}

export default Component;
