import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c66xi8j7h.css';
import '../../css/t/ty9rd6b5j.css';
import '../../css/x/xv7v8jb4l.css';
import '../../css/s/su98nkraq.css';
import '../../css/f/fw7p_dbxb.css';
import '../../css/m/mah477b0j.css';
import '../../css/p/pu4xj_upd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="c66xi8j7h"/><path class="ty9rd6b5j"/><path class="xv7v8jb4l"/><path class="su98nkraq"/><path class="fw7p_dbxb"/><path class="mah477b0j"/><path class="pu4xj_upd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:subtitles-bold-duotone"} {...others} />);
}

export default Component;
