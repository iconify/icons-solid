import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aiwia2b6v.css';
import '../../css/s/sttqdgtpq.css';
import '../../css/e/ejr4vub7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="aiwia2b6v"/><path class="sttqdgtpq"/><path class="ejr4vub7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:media-podcast"} {...others} />);
}

export default Component;
