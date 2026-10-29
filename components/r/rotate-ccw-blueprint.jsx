import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/c4m7y61rf.css';
import '../../css/p/petj3ybnh.css';
import '../../css/i/ia9878bzv.css';
import '../../css/v/v0uimdbjt.css';
import '../../css/j/jmgi-wb9f.css';
import '../../css/m/mrtuohvsz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="c4m7y61rf wm-deco"/><path class="petj3ybnh wm-deco"/><path class="ia9878bzv wm-k"/><path class="v0uimdbjt wm-a"/><path class="jmgi-wb9f wm-k"/><path class="mrtuohvsz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rotate-ccw-blueprint"} {...others} />);
}

export default Component;
