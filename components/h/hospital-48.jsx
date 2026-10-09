import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1i2kqxtp.css';
import '../../css/j/js0evub2c.css';
import '../../css/r/r_qwwvyaa.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p1i2kqxtp"/><path class="js0evub2c"/><path class="r_qwwvyaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hospital-48"} {...others} />);
}

export default Component;
