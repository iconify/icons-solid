import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dajfk4b8b.css';
import '../../css/j/j81k_5xcc.css';
import '../../css/d/dlto2ybuj.css';
import '../../css/n/nx67zeblw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dajfk4b8b"/><circle transform="rotate(-22.5 187.997 291.992)" class="j81k_5xcc"/><path class="dlto2ybuj"/><path class="nx67zeblw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:logo-reddit"} {...others} />);
}

export default Component;
