import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k88rdeb7o.css';
import '../../css/u/uy7tz-bwh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k88rdeb7o"/><path class="uy7tz-bwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:armchair-2-bold-duotone"} {...others} />);
}

export default Component;
