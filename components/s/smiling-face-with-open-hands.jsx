import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4u8pbwjc.css';
import '../../css/l/ll6xmympj.css';
import '../../css/p/p4xm5hb2z.css';
import '../../css/z/z04drlb1l.css';
import '../../css/d/d0nwihbrn.css';
import '../../css/l/lsply5tpo.css';
import '../../css/d/dtsu3kb3a.css';
import '../../css/b/bwdb66byk.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="x4u8pbwjc"><circle class="ll6xmympj"/><path class="p4xm5hb2z"/></g><g class="z04drlb1l"><path class="d0nwihbrn"/><path class="lsply5tpo"/><path class="dtsu3kb3a"/><path class="bwdb66byk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:smiling-face-with-open-hands"} {...others} />);
}

export default Component;
