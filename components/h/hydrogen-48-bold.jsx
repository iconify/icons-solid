import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2neunb3u.css';
import '../../css/w/wiim_eylq.css';
import '../../css/a/axnz9cc6e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n2neunb3u"/><path class="wiim_eylq"/><path class="axnz9cc6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-48-bold"} {...others} />);
}

export default Component;
