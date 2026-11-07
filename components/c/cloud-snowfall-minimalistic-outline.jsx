import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqmhc7b0x.css';
import '../../css/s/s_jemhbps.css';
import '../../css/l/lvh_gjuhk.css';
import '../../css/i/iwoyv2bvo.css';
import '../../css/a/avto0dbky.css';
import '../../css/z/zdo7wyief.css';
import '../../css/s/s3a2z59lo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mqmhc7b0x"/><path class="s_jemhbps"/><path class="lvh_gjuhk"/><path class="iwoyv2bvo"/><path class="avto0dbky"/><path class="zdo7wyief"/><path clip-rule="evenodd" class="s3a2z59lo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-snowfall-minimalistic-outline"} {...others} />);
}

export default Component;
