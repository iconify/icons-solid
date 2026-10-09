import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qtzyn0b2b.css';
import '../../css/a/atyhtibwr.css';
import '../../css/b/bnq5ffb9n.css';
import '../../css/r/ranxahbrs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qtzyn0b2b"/><path class="atyhtibwr"/><path class="bnq5ffb9n"/><path class="ranxahbrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-dashboard-48"} {...others} />);
}

export default Component;
