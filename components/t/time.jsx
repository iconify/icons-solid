import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/e/ekwko04jt.css';
import '../../css/k/ksqdnab9y.css';
import '../../css/d/dq_gcyqby.css';
import '../../css/x/xf5046bzz.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="ekwko04jt"/><path class="ksqdnab9y"/><path class="dq_gcyqby"/><path class="xf5046bzz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:time"} {...others} />);
}

export default Component;
