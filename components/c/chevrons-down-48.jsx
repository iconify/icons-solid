import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xgbrg5b8n.css';
import '../../css/c/cw3c7_bbg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xgbrg5b8n"/><path class="cw3c7_bbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chevrons-down-48"} {...others} />);
}

export default Component;
