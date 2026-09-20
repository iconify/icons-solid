import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y12majbve.css';
import '../../css/c/c-bbfqb3b.css';
import '../../css/h/hjvj7kb-a.css';
import '../../css/w/wnqqe6b6s.css';
import '../../css/b/b6vb_rrtr.css';
import '../../css/x/xlu9ccbml.css';
import '../../css/w/w9b-j11ki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="y12majbve"/><path class="c-bbfqb3b"/><path class="hjvj7kb-a"/><path class="wnqqe6b6s"/><path class="b6vb_rrtr"/><path class="xlu9ccbml"/><path class="w9b-j11ki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skateboarding-bold"} {...others} />);
}

export default Component;
