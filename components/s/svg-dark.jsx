import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/d/dio5webpa.css';
import '../../css/j/jblc8vb8b.css';
import '../../css/a/azj0fvbhv.css';
import '../../css/t/t7uk356fz.css';
import '../../css/e/ewbre1bcq.css';
import '../../css/w/we9hgjl-y.css';
import '../../css/p/phm5su22y.css';
import '../../css/o/oy6v5hv-e.css';
import '../../css/e/eaq0rjeew.css';
import '../../css/d/d2qoob9nd.css';
import '../../css/b/by10-tczx.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="dio5webpa"/><path class="jblc8vb8b"/><path class="azj0fvbhv"/><path class="t7uk356fz"/><path class="ewbre1bcq"/><path class="we9hgjl-y"/><path class="phm5su22y"/><path class="oy6v5hv-e"/><path class="eaq0rjeew"/><path class="d2qoob9nd"/><path class="by10-tczx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:svg-dark"} {...others} />);
}

export default Component;
