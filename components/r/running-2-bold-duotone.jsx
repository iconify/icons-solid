import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shc5ox2kp.css';
import '../../css/k/kpdxftb_g.css';
import '../../css/w/wi_334vbz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="shc5ox2kp"/><path clip-rule="evenodd" class="kpdxftb_g"/><path class="wi_334vbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:running-2-bold-duotone"} {...others} />);
}

export default Component;
