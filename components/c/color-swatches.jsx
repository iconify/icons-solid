import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r0j0sch9q.css';
import '../../css/g/gz-646bff.css';
import '../../css/c/ccozvib1o.css';
import '../../css/j/jcbqh7xwh.css';
import '../../css/a/as9ubnbuq.css';
import '../../css/y/yfk_qlb7l.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="r0j0sch9q"/><path clip-rule="evenodd" class="gz-646bff"/><path class="ccozvib1o"/><path class="jcbqh7xwh"/><path class="as9ubnbuq"/><path class="yfk_qlb7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:color-swatches"} {...others} />);
}

export default Component;
