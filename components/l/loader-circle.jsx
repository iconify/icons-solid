import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gsvigrbgh.css';
import '../../css/f/fc-kwxboe.css';
import '../../css/z/zxxmof9pf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gsvigrbgh wm-shadow"/><path class="fc-kwxboe wm-k"/><path class="wm-k zxxmof9pf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:loader-circle"} {...others} />);
}

export default Component;
