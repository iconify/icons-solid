import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qmrnkkbib.css';
import '../../css/u/ui28tsbuu.css';
import '../../css/z/zozaj1o1q.css';
import '../../css/v/v0i8j_brt.css';
import '../../css/t/tatgggbkl.css';

const viewBox = {"width":42,"height":32};
const content = `<g class="cuyn6tgcc"><path class="qmrnkkbib"/><path class="ui28tsbuu"/><circle class="zozaj1o1q"/><circle class="v0i8j_brt"/><circle class="tatgggbkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:browser"} {...others} />);
}

export default Component;
