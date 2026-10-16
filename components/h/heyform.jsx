import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/od6iwkbev.css';
import '../../css/p/p7gtvpbix.css';
import '../../css/u/unj_jcx7h.css';

const viewBox = {"width":107,"height":108};
const content = `<g class="ft5dv1b6b"><path class="od6iwkbev"/><path class="p7gtvpbix"/><path class="unj_jcx7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:heyform"} {...others} />);
}

export default Component;
