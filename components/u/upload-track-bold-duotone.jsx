import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/veh0odx2p.css';
import '../../css/w/wpxm9accj.css';
import '../../css/j/jhnvfxetl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="veh0odx2p"/><path class="wpxm9accj"/><path class="jhnvfxetl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:upload-track-bold-duotone"} {...others} />);
}

export default Component;
