import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qrk88uxja.css';
import '../../css/k/kn5yufbkj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qrk88uxja"/><path class="kn5yufbkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:panel-bottom-48-bold"} {...others} />);
}

export default Component;
