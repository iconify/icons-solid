import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsv726byj.css';
import '../../css/w/w0t6-kbpw.css';
import '../../css/v/ve_svj3jf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tsv726byj"/><path class="w0t6-kbpw"/><path class="ve_svj3jf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:iot-device-20-bold"} {...others} />);
}

export default Component;
