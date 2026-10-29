import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w0c59ifwm.css';
import '../../css/x/x-q3vxbaq.css';
import '../../css/n/nj4hxu43c.css';
import '../../css/k/k7hj02bqa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w0c59ifwm wm-k"/><path class="wm-k x-q3vxbaq"/><path class="nj4hxu43c wm-a"/><path class="k7hj02bqa wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:sparkles"} {...others} />);
}

export default Component;
