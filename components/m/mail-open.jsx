import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y66sri5vx.css';
import '../../css/a/a53gbue9f.css';
import '../../css/w/w6ndr5bte.css';
import '../../css/v/v_qvqo2tq.css';
import '../../css/w/wryy3v57r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k y66sri5vx"/><path class="a53gbue9f wm-k"/><path class="w6ndr5bte wm-a"/><path class="v_qvqo2tq wm-a"/><path class="wm-k wryy3v57r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:mail-open"} {...others} />);
}

export default Component;
