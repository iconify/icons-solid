import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvuoxcc7c.css';
import '../../css/b/bbi4wky7o.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="uvuoxcc7c"/><path class="bbi4wky7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:moon-sleep-bold-duotone"} {...others} />);
}

export default Component;
