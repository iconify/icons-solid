import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvd6fwb9u.css';
import '../../css/b/bkxve54zr.css';
import '../../css/s/sr_chs9kp.css';
import '../../css/v/vs-rjtnnd.css';
import '../../css/f/f7dlnxybq.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="dvd6fwb9u"><path class="bkxve54zr"/><path class="sr_chs9kp"/><path class="vs-rjtnnd"/></g><path class="f7dlnxybq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:coffin"} {...others} />);
}

export default Component;
