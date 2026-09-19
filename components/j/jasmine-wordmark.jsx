import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hxkoqb07q.css';
import '../../css/g/go4d8z99l.css';
import '../../css/w/weboadcul.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="cuyn6tgcc"><path class="hxkoqb07q"/><path class="go4d8z99l"/><path class="weboadcul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:jasmine-wordmark"} {...others} />);
}

export default Component;
