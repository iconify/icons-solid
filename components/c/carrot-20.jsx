import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wkxaczbdn.css';
import '../../css/a/ad8m3acwq.css';
import '../../css/a/apgdcwqaq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wkxaczbdn"/><path class="ad8m3acwq"/><path class="apgdcwqaq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carrot-20"} {...others} />);
}

export default Component;
