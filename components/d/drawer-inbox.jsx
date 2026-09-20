import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/g/g-3ffozih.css';
import '../../css/r/rgrteobvs.css';
import '../../css/f/f-0481bce.css';
import '../../css/w/w28dcnb7t.css';
import '../../css/q/qox7dob_i.css';
import '../../css/m/mmzeoqb-y.css';
import '../../css/l/l4fl774ef.css';

const viewBox = {"width":41,"height":41,"top":-0.5};
const content = `<g class="umm606kxf"><path class="g-3ffozih"/><path class="rgrteobvs"/><path class="f-0481bce"/><path class="w28dcnb7t"/><path class="qox7dob_i"/><path class="mmzeoqb-y"/><path class="l4fl774ef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:drawer-inbox"} {...others} />);
}

export default Component;
