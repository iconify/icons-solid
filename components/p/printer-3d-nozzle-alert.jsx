import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vx3w-qynf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vx3w-qynf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:printer-3d-nozzle-alert"} {...others} />);
}

export default Component;
