import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ixy5tybnv.css';
import '../../css/s/sypm-h04n.css';
import '../../css/r/rdsgzmbit.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ixy5tybnv"/><path class="sypm-h04n"/><path class="rdsgzmbit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-array-sun-48-bold"} {...others} />);
}

export default Component;
