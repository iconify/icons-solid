import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/sqt8v5ywe.css';
import '../../css/e/ex8pu-bqw.css';
import '../../css/q/qqqhlf-rd.css';
import '../../css/b/bol0cdcoz.css';
import '../../css/o/olfec-bbv.css';
import '../../css/z/zavfahc0j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="sqt8v5ywe wm-deco"/><path class="ex8pu-bqw wm-deco"/><path class="qqqhlf-rd wm-k"/><path class="bol0cdcoz wm-a"/><path class="olfec-bbv wm-k"/><path class="wm-a zavfahc0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:code-xml-blueprint"} {...others} />);
}

export default Component;
