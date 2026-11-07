import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnb90nbxf.css';
import '../../css/g/g2uxot4xb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rnb90nbxf"/><path class="g2uxot4xb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:round-arrow-right-bold-duotone"} {...others} />);
}

export default Component;
