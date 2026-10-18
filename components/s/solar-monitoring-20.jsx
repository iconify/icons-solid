import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdfpdkohr.css';
import '../../css/w/wewzkacif.css';
import '../../css/q/qodh6v76z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tdfpdkohr"/><path class="wewzkacif"/><path class="qodh6v76z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-monitoring-20"} {...others} />);
}

export default Component;
