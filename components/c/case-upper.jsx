import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jcdhmmfoc.css';
import '../../css/y/ypahgr22z.css';
import '../../css/w/wor8knb1q.css';
import '../../css/b/b3yix0lha.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="jcdhmmfoc wm-shadow"/><path class="wm-shadow ypahgr22z"/><path class="wor8knb1q"/><path class="b3yix0lha"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:case-upper"} {...others} />);
}

export default Component;
