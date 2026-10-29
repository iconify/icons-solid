import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wq35sd6ai.css';
import '../../css/b/b9ffadbro.css';
import '../../css/b/b-sgxvq0k.css';
import '../../css/i/it9amcbit.css';
import '../../css/a/auty09_bz.css';
import '../../css/w/w921-9bcj.css';
import '../../css/h/h_7k2ac1v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow wq35sd6ai"/><path class="b9ffadbro wm-k"/><path class="b-sgxvq0k wm-k"/><path class="it9amcbit wm-k"/><path class="auty09_bz wm-k"/><path class="w921-9bcj wm-k"/><path class="h_7k2ac1v wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:key-round"} {...others} />);
}

export default Component;
