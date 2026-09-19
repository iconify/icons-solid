import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xndgo8bxx.css';
import '../../css/d/dj23tuv2h.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="xndgo8bxx"/><path class="dj23tuv2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:gnuradio-wordmark"} {...others} />);
}

export default Component;
