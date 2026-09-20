import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/th6g33pod.css';
import '../../css/b/bwtu4ob_m.css';
import '../../css/e/e9lc3-5zf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="th6g33pod"/><path class="bwtu4ob_m"/><path class="e9lc3-5zf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:notification-application-2"} {...others} />);
}

export default Component;
