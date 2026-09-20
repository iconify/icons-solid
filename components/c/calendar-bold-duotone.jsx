import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sb2g__esw.css';
import '../../css/f/f615w5rff.css';
import '../../css/m/mwicqf4zj.css';
import '../../css/y/ydsjqhbjz.css';
import '../../css/y/y-j9wnbzg.css';
import '../../css/q/qdly08s5o.css';
import '../../css/g/gkfryxboz.css';
import '../../css/u/ujjowgx-j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="sb2g__esw"/><path class="f615w5rff"/><path class="mwicqf4zj"/><path class="ydsjqhbjz"/><path class="y-j9wnbzg"/><path class="qdly08s5o"/><path class="gkfryxboz"/><path class="ujjowgx-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:calendar-bold-duotone"} {...others} />);
}

export default Component;
