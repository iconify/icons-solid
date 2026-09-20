import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umbcrlb4m.css';
import '../../css/k/kmzsj98hw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="umbcrlb4m"/><path class="kmzsj98hw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:pie-chart-solid"} {...others} />);
}

export default Component;
