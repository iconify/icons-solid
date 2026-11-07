import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mpv5vhdla.css';
import '../../css/r/rq9nj4b_b.css';
import '../../css/p/p1iyhdoir.css';
import '../../css/k/kb4z_3z1y.css';
import '../../css/l/lwuh2ntst.css';
import '../../css/y/y01l18b7v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mpv5vhdla"/><path class="rq9nj4b_b"/><path class="p1iyhdoir"/><path class="kb4z_3z1y"/><path class="lwuh2ntst"/><path class="y01l18b7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:target-bold-duotone"} {...others} />);
}

export default Component;
