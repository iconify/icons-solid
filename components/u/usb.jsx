import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2qslhbnv.css';
import '../../css/h/h8poafcho.css';
import '../../css/d/dh2skybyq.css';
import '../../css/u/ub3e2sbvd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q2qslhbnv"/><path class="h8poafcho"/><path class="dh2skybyq"/><path class="ub3e2sbvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:usb"} {...others} />);
}

export default Component;
