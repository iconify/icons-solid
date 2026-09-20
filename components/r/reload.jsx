import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nh6vwjb6k.css';
import '../../css/x/xjeqo6bqe.css';
import '../../css/r/rcf3djyxt.css';
import '../../css/z/zz499ob7z.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><circle class="nh6vwjb6k"/><path class="xjeqo6bqe"/><path class="rcf3djyxt"/><path class="zz499ob7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:reload"} {...others} />);
}

export default Component;
