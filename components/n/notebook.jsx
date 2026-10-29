import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qa0hl4bbs.css';
import '../../css/a/a3abudbgg.css';
import '../../css/x/xc8hbmbnc.css';
import '../../css/w/w9nge6bha.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qa0hl4bbs wm-k"/><path class="a3abudbgg wm-k"/><path class="wm-a xc8hbmbnc"/><path class="w9nge6bha wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:notebook"} {...others} />);
}

export default Component;
