import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c29l7mb9d.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="c29l7mb9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:gantt-chart-outline"} {...others} />);
}

export default Component;
