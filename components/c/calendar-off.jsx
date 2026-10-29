import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uc5oe23ux.css';
import '../../css/o/o5lefjbra.css';
import '../../css/t/t4nz_j9-c.css';
import '../../css/x/xgn8g_bte.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="uc5oe23ux wm-k"/><path class="o5lefjbra"/><path class="t4nz_j9-c"/><path class="wm-s xgn8g_bte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:calendar-off"} {...others} />);
}

export default Component;
