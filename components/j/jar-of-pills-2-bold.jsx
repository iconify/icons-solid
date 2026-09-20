import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zl4jlpb5q.css';
import '../../css/o/o7jjhdbsd.css';
import '../../css/k/k05quqb0j.css';
import '../../css/p/ppesglbji.css';
import '../../css/e/e56ib4b-i.css';
import '../../css/e/e0oiq1b4b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zl4jlpb5q"/><path class="o7jjhdbsd"/><path class="k05quqb0j"/><path clip-rule="evenodd" class="ppesglbji"/><path class="e56ib4b-i"/><path class="e0oiq1b4b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:jar-of-pills-2-bold"} {...others} />);
}

export default Component;
