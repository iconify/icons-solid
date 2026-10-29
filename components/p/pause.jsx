import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0lgi1bob.css';
import '../../css/i/iaya53yxb.css';
import '../../css/b/bw58_rb5h.css';
import '../../css/e/ewf-q02sv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j0lgi1bob wm-shadow"/><path class="iaya53yxb wm-k"/><path class="bw58_rb5h wm-k"/><path class="ewf-q02sv wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:pause"} {...others} />);
}

export default Component;
