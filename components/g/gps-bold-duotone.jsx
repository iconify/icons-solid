import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2m6oob6i.css';
import '../../css/n/n30c4w9wg.css';
import '../../css/s/s83ky2bov.css';
import '../../css/g/ghf37rbst.css';
import '../../css/r/rqh_sjy7o.css';
import '../../css/i/i9jr0bg_z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o2m6oob6i"/><path class="n30c4w9wg"/><path class="s83ky2bov"/><path class="ghf37rbst"/><path class="rqh_sjy7o"/><path class="i9jr0bg_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gps-bold-duotone"} {...others} />);
}

export default Component;
