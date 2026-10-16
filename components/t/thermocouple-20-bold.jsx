import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rc82xxbku.css';
import '../../css/i/im-vrsb-c.css';
import '../../css/a/apexb8rod.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rc82xxbku"/><path class="im-vrsb-c"/><path class="apexb8rod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermocouple-20-bold"} {...others} />);
}

export default Component;
