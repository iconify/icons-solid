import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pszy_4b0t.css';
import '../../css/j/j4-krt-9e.css';
import '../../css/v/v2z71xb6c.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path class="pszy_4b0t"/><path clip-rule="evenodd" class="j4-krt-9e"/><path clip-rule="evenodd" class="v2z71xb6c"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:question-circle"} {...others} />);
}

export default Component;
