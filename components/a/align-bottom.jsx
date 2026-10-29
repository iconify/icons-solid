import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p3pckusum.css';
import '../../css/p/p44kktkew.css';
import '../../css/y/yi51ak_di.css';
import '../../css/q/qq-u2or2f.css';
import '../../css/x/xn883mb-n.css';
import '../../css/c/cw9w54vvd.css';
import '../../css/j/j4loxyinb.css';
import '../../css/u/umri5b0eu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p3pckusum wm-shadow"/><path class="p44kktkew wm-k"/><path class="wm-k yi51ak_di"/><path class="qq-u2or2f wm-a"/><path class="wm-a xn883mb-n"/><path class="cw9w54vvd wm-a"/><path class="j4loxyinb wm-a"/><path class="umri5b0eu wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:align-bottom"} {...others} />);
}

export default Component;
