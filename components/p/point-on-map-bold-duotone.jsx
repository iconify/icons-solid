import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-cbzraid.css';
import '../../css/f/f3r88-jzr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k-cbzraid"/><path clip-rule="evenodd" class="f3r88-jzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:point-on-map-bold-duotone"} {...others} />);
}

export default Component;
