import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/b/b1oxgvbql.css';
import '../../css/y/ycuv6y2do.css';
import '../../css/z/zbclc9bmj.css';
import '../../css/t/tzbt5q0-x.css';
import '../../css/p/pxtbl9b9b.css';
import '../../css/e/ex0_6-3jk.css';
import '../../css/o/ow5qbpbcb.css';
import '../../css/y/y84jebchz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="b1oxgvbql"/><path class="ycuv6y2do"/><path class="zbclc9bmj"/><path class="tzbt5q0-x"/><path class="pxtbl9b9b"/><path class="ex0_6-3jk"/><path class="ow5qbpbcb"/><path class="y84jebchz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:space-colony"} {...others} />);
}

export default Component;
