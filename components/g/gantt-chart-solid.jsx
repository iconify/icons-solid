import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/at_qv4_-d.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="at_qv4_-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:gantt-chart-solid"} {...others} />);
}

export default Component;
