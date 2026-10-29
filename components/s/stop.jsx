import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/diywtwb4m.css';
import '../../css/w/wmmjaq2pq.css';
import '../../css/v/vkhwuobld.css';
import '../../css/i/iw-4veb7l.css';
import '../../css/c/czwdbdc3f.css';
import '../../css/w/wj-7-mbko.css';
import '../../css/i/irrxb9jzs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="diywtwb4m wm-shadow"/><path class="wmmjaq2pq"/><path class="vkhwuobld"/><path class="iw-4veb7l"/><path class="czwdbdc3f"/><path class="wj-7-mbko wm-shine"/><path class="irrxb9jzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:stop"} {...others} />);
}

export default Component;
