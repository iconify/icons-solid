import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djeqznbam.css';
import '../../css/h/h9taerbyy.css';
import '../../css/c/cgk6y35ea.css';
import '../../css/s/s3sc_vedu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="djeqznbam"/><path class="h9taerbyy"/><path class="cgk6y35ea"/><path class="s3sc_vedu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:usb-20"} {...others} />);
}

export default Component;
