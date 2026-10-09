import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nowsdr-3b.css';
import '../../css/x/xaxgc568e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nowsdr-3b"/><path class="xaxgc568e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:watch-48-bold"} {...others} />);
}

export default Component;
