import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j0y_g_b-j.css';
import '../../css/a/ah4dkhbeo.css';
import '../../css/f/f6a47wb9l.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j0y_g_b-j"/><path class="ah4dkhbeo"/><path clip-rule="evenodd" class="f6a47wb9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:bag-suitcase-1-flat"} {...others} />);
}

export default Component;
