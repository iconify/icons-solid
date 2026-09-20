import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eb5liz2ay.css';
import '../../css/l/luv1-gbww.css';
import '../../css/a/ae_1xpylo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="eb5liz2ay"/><path class="luv1-gbww"/><path class="ae_1xpylo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:projector-board-flat"} {...others} />);
}

export default Component;
