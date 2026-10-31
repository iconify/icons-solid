import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ebi73sb0u.css';
import '../../css/j/jqk6vecqy.css';
import '../../css/z/z958i_y6r.css';
import '../../css/u/u8_9verwe.css';
import '../../css/n/nbue83byx.css';
import '../../css/q/qxx10ybzk.css';
import '../../css/w/wpme-du2i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ebi73sb0u wm-k"/><path class="jqk6vecqy wm-deco"/><path class="wm-k z958i_y6r"/><path class="u8_9verwe wm-shadow"/><path class="nbue83byx wm-shine"/><path class="qxx10ybzk wm-shine"/><path class="wm-shine wpme-du2i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:message-square"} {...others} />);
}

export default Component;
