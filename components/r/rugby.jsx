import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hrfjtp5tr.css';
import '../../css/o/oxwfibi_t.css';
import '../../css/y/yg6giyrxr.css';
import '../../css/b/bsvy8fieq.css';
import '../../css/b/b_3iv4bvg.css';
import '../../css/f/fy-mqlv_i.css';
import '../../css/l/l542v5ndk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="hrfjtp5tr"/><path class="oxwfibi_t"/><path class="yg6giyrxr"/><path class="bsvy8fieq"/><path class="b_3iv4bvg"/><path class="fy-mqlv_i"/><path class="l542v5ndk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:rugby"} {...others} />);
}

export default Component;
