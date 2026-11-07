import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gv4wotbsh.css';
import '../../css/g/g1b-v8rmi.css';
import '../../css/t/tmzilmxfy.css';
import '../../css/s/siai_tb_r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gv4wotbsh"/><path class="g1b-v8rmi"/><path class="tmzilmxfy"/><path class="siai_tb_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notification-unread-lines-bold-duotone"} {...others} />);
}

export default Component;
