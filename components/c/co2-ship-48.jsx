import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4uuy_b9u.css';
import '../../css/l/lq6x1topr.css';
import '../../css/h/hcihy2b2b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t4uuy_b9u"/><path class="lq6x1topr"/><path class="hcihy2b2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:co2-ship-48"} {...others} />);
}

export default Component;
