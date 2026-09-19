import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/r8g3kubio.css';
import '../../css/b/b-b-8eb2h.css';
import '../../css/x/xsvqqibcb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="r8g3kubio"/><path class="b-b-8eb2h"/><ellipse class="xsvqqibcb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:magic-hat"} {...others} />);
}

export default Component;
