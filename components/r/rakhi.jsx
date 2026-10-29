import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nzd01mb0l.css';
import '../../css/w/wlhyncciu.css';
import '../../css/d/dpfqr4jfd.css';
import '../../css/t/to6oxfb5t.css';
import '../../css/b/bqs4254cf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="nzd01mb0l wm-k"/><path class="wlhyncciu wm-a"/><path class="dpfqr4jfd wm-s"/><path class="to6oxfb5t"/><path class="bqs4254cf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:rakhi"} {...others} />);
}

export default Component;
