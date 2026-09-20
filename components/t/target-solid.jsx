import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bx0_8ybig.css';
import '../../css/h/hgo385b9t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="bx0_8ybig"/><path clip-rule="evenodd" class="hgo385b9t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:target-solid"} {...others} />);
}

export default Component;
