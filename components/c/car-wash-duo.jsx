import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ackxrjb_i.css';
import '../../css/x/xpw4hmbjx.css';
import '../../css/r/rmv9xr5fp.css';
import '../../css/b/bajpbybfh.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ackxrjb_i"/><path class="xpw4hmbjx"/><path class="rmv9xr5fp"/><path class="bajpbybfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:car-wash-duo"} {...others} />);
}

export default Component;
