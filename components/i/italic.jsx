import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gq7pfcb6v.css';
import '../../css/j/jezerkbcr.css';
import '../../css/i/i3jn7dpga.css';
import '../../css/b/bi81cb3cb.css';
import '../../css/d/d4d4ogbjp.css';
import '../../css/a/am9bibcrf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gq7pfcb6v wm-k"/><path class="jezerkbcr wm-k"/><path class="i3jn7dpga wm-k"/><path class="bi81cb3cb wm-a"/><path class="d4d4ogbjp wm-a"/><path class="am9bibcrf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:italic"} {...others} />);
}

export default Component;
