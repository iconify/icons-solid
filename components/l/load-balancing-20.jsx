import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1osud8tz.css';
import '../../css/s/spvzilqpr.css';
import '../../css/a/aqd5nkwct.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j1osud8tz"/><path class="spvzilqpr"/><path class="aqd5nkwct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:load-balancing-20"} {...others} />);
}

export default Component;
