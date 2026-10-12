import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5bk2nbef.css';
import '../../css/b/bdjsbobgf.css';
import '../../css/w/whrxjkbma.css';
import '../../css/t/tgzsbh4mh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t5bk2nbef"/><path class="bdjsbobgf"/><path class="whrxjkbma"/><path class="tgzsbh4mh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fire-station-20"} {...others} />);
}

export default Component;
