import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w6fuul6_a.css';
import '../../css/x/xrn-wia8n.css';
import '../../css/m/m9gj31bph.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="w6fuul6_a"/><path class="xrn-wia8n"/><ellipse transform="rotate(30 23.477 12.592)" class="m9gj31bph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:light-blue-heart"} {...others} />);
}

export default Component;
