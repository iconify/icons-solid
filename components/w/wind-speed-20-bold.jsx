import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nuzmv1qpb.css';
import '../../css/p/p_zjrxi1a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nuzmv1qpb"/><path class="p_zjrxi1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-speed-20-bold"} {...others} />);
}

export default Component;
