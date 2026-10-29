import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvpb7fj5r.css';
import '../../css/r/r32n8pvoq.css';
import '../../css/w/wnn5rsy_n.css';
import '../../css/f/fc7t0_b1z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qvpb7fj5r wm-shadow"/><path class="r32n8pvoq wm-k"/><path class="wm-k wnn5rsy_n"/><path class="fc7t0_b1z wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:move"} {...others} />);
}

export default Component;
