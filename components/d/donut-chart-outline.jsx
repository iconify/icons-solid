import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ma1xzssnw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ma1xzssnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:donut-chart-outline"} {...others} />);
}

export default Component;
