import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2neunb3u.css';
import '../../css/y/ylciz6x-b.css';
import '../../css/s/s6ko3xcua.css';
import '../../css/p/pml7bcbbm.css';
import '../../css/t/t79v3gblr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n2neunb3u"/><path class="ylciz6x-b"/><path class="s6ko3xcua"/><path class="pml7bcbbm"/><path class="t79v3gblr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:accessibility-48-bold"} {...others} />);
}

export default Component;
