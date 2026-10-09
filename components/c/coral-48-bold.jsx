import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngvvfgbiq.css';
import '../../css/x/xzl9ytdci.css';
import '../../css/e/e3s9tcb5r.css';
import '../../css/o/oi4pmdc2i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ngvvfgbiq"/><path class="xzl9ytdci"/><path class="e3s9tcb5r"/><path class="oi4pmdc2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:coral-48-bold"} {...others} />);
}

export default Component;
