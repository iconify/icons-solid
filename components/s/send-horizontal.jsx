import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/o4bjcmbul.css';
import '../../css/z/zlg_u3b_t.css';
import '../../css/d/dc82hfbss.css';
import '../../css/i/ie3ykpgds.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="o4bjcmbul wm-shadow"/><path class="wm-shadow zlg_u3b_t"/><path class="dc82hfbss"/><path class="ie3ykpgds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:send-horizontal"} {...others} />);
}

export default Component;
