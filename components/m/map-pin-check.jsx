import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xhxyc3bra.css';
import '../../css/a/a342qvprm.css';
import '../../css/g/g5cz3150c.css';
import '../../css/b/b5tgu7bjk.css';
import '../../css/x/xm5cgrb4k.css';
import '../../css/t/t1x6cac8j.css';
import '../../css/j/ja6_p0r8d.css';
import '../../css/p/pktv8zb6v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow xhxyc3bra"/><path class="a342qvprm wm-k"/><path class="g5cz3150c wm-k"/><path class="b5tgu7bjk wm-k"/><path class="wm-k xm5cgrb4k"/><path class="t1x6cac8j wm-shine"/><path class="ja6_p0r8d wm-k"/><path class="pktv8zb6v wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:map-pin-check"} {...others} />);
}

export default Component;
