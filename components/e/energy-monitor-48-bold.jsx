import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4i0zhp8u.css';
import '../../css/z/zhkqvsbwg.css';
import '../../css/f/f45da2b6l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w4i0zhp8u"/><path class="zhkqvsbwg"/><path class="f45da2b6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-monitor-48-bold"} {...others} />);
}

export default Component;
