import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/le3zaacjn.css';
import '../../css/e/elo-e5bqd.css';
import '../../css/b/b3jn5db8t.css';
import '../../css/n/nsalac6yh.css';
import '../../css/t/t6nv7kuam.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="le3zaacjn"/><path class="elo-e5bqd wm-k"/><path class="b3jn5db8t wm-k"/><path class="nsalac6yh wm-a"/><path class="t6nv7kuam wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heart-handshake-sketch"} {...others} />);
}

export default Component;
