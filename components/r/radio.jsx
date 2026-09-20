import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zocsw-b9c.css';
import '../../css/a/albikqbom.css';
import '../../css/c/c7bj3u4fy.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zocsw-b9c"/><path class="albikqbom"/><path clip-rule="evenodd" class="c7bj3u4fy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:radio"} {...others} />);
}

export default Component;
