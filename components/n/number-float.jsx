import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jexse1bhw.css';
import '../../css/w/w7zkk5bhq.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="jexse1bhw"/><path clip-rule="evenodd" class="w7zkk5bhq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:number-float"} {...others} />);
}

export default Component;
