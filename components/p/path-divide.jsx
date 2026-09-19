import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f6a6g7eze.css';
import '../../css/p/py6kjhbkb.css';
import '../../css/x/x-3-lrb6c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="f6a6g7eze"/><path class="py6kjhbkb"/><path class="x-3-lrb6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:path-divide"} {...others} />);
}

export default Component;
