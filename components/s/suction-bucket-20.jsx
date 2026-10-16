import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rs87d4bxt.css';
import '../../css/w/wexnw_bks.css';
import '../../css/p/pycxazbfr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rs87d4bxt"/><path class="wexnw_bks"/><path class="pycxazbfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:suction-bucket-20"} {...others} />);
}

export default Component;
