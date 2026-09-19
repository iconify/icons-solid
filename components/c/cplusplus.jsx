import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hned8ipkc.css';
import '../../css/w/wkhcofbux.css';
import '../../css/s/shjjkdb4r.css';
import '../../css/i/i1sev0bej.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="hned8ipkc"/><path class="wkhcofbux"/><path class="shjjkdb4r"/><path class="i1sev0bej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:cplusplus"} {...others} />);
}

export default Component;
