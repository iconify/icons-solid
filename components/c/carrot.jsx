import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uh6chvztw.css';
import '../../css/b/bkqc3vq5j.css';
import '../../css/t/tbiebvz0u.css';
import '../../css/j/jxwqwqlrk.css';
import '../../css/g/ga34h2b9k.css';

const viewBox = {"width":1024,"height":1024};
const content = `<g display="block"><path class="uh6chvztw"/><path class="bkqc3vq5j"/><path class="tbiebvz0u"/><path class="jxwqwqlrk"/><path class="ga34h2b9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:carrot"} {...others} />);
}

export default Component;
