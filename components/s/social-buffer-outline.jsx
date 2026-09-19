import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ud72a57ps.css';
import '../../css/b/byocr9c0k.css';
import '../../css/v/vj8lj592n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ud72a57ps"/><path class="byocr9c0k"/><path class="vj8lj592n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-buffer-outline"} {...others} />);
}

export default Component;
