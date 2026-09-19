import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e8ks3xb3r.css';
import '../../css/m/m4f1sac4q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e8ks3xb3r"/><path class="m4f1sac4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:calendar-date-1"} {...others} />);
}

export default Component;
