import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wn_fvc00b.css';
import '../../css/s/splbbwb0e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wn_fvc00b"/><circle class="splbbwb0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:key"} {...others} />);
}

export default Component;
