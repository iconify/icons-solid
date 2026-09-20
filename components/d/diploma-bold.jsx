import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x3k67qbqr.css';
import '../../css/z/zymdcz7lw.css';
import '../../css/f/fl1ygo06s.css';
import '../../css/w/wysjoybzz.css';
import '../../css/y/ybhzzmbub.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x3k67qbqr"/><path class="zymdcz7lw"/><path class="fl1ygo06s"/><path class="wysjoybzz"/><path class="ybhzzmbub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:diploma-bold"} {...others} />);
}

export default Component;
