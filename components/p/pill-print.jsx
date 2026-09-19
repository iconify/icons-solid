import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/owfeisrst.css';
import '../../css/p/putt_dyyu.css';
import '../../css/l/lr9b8khur.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="owfeisrst"/><path clip-rule="evenodd" class="putt_dyyu"/><path class="lr9b8khur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:pill-print"} {...others} />);
}

export default Component;
