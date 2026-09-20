import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ou408q7in.css';
import '../../css/d/d9nspmtjp.css';
import '../../css/o/oid1jwbgs.css';
import '../../css/r/r2z99h6tg.css';
import '../../css/w/wzzte3bod.css';
import '../../css/e/e703ygb7l.css';
import '../../css/y/yapblp33s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ou408q7in"/><path class="d9nspmtjp"/><path class="oid1jwbgs"/><path class="r2z99h6tg"/><path class="wzzte3bod"/><path class="e703ygb7l"/><path class="yapblp33s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:algorithm"} {...others} />);
}

export default Component;
