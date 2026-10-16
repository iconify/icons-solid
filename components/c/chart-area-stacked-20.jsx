import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/km2fl-ght.css';
import '../../css/n/n_71w1bge.css';
import '../../css/x/x_cc1-j5s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="km2fl-ght"/><path class="n_71w1bge"/><path class="x_cc1-j5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-area-stacked-20"} {...others} />);
}

export default Component;
