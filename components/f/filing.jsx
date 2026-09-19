import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lfmxfib-p.css';
import '../../css/g/go9g36_gr.css';
import '../../css/n/nodf4s9cv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lfmxfib-p"/><path class="go9g36_gr"/><path class="nodf4s9cv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:filing"} {...others} />);
}

export default Component;
