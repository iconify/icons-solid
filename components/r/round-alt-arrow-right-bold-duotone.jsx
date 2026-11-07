import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnb90nbxf.css';
import '../../css/d/dq1ayd06k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rnb90nbxf"/><path class="dq1ayd06k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:round-alt-arrow-right-bold-duotone"} {...others} />);
}

export default Component;
