import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jw_axvbpc.css';
import '../../css/r/r661y34wk.css';
import '../../css/r/replhxbbv.css';
import '../../css/v/vi68j6y1t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jw_axvbpc wm-k"/><path class="r661y34wk wm-k"/><path class="replhxbbv wm-k"/><path class="vi68j6y1t wm-shadow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:door-open"} {...others} />);
}

export default Component;
