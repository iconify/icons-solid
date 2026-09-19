import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p8l6c1b3k.css';
import '../../css/n/nkchmbc-t.css';
import '../../css/c/c8pavbbjd.css';

const viewBox = {"width":28,"height":28};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVG9H1iteHl)" class="p8l6c1b3k"/><defs><linearGradient id="SVG9H1iteHl" x1="-5.714" x2="3.805" y1="2.75" y2="31.377" gradientUnits="userSpaceOnUse"><stop class="nkchmbc-t"/><stop offset="1" class="c8pavbbjd"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:link-28"} {...others} />);
}

export default Component;
