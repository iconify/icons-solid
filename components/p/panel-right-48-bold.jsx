import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qrk88uxja.css';
import '../../css/a/aoqq0ebdf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qrk88uxja"/><path class="aoqq0ebdf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:panel-right-48-bold"} {...others} />);
}

export default Component;
