import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpnkqjn8e.css';
import '../../css/i/ifeyr2b5m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tpnkqjn8e"/><path class="ifeyr2b5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:server-24"} {...others} />);
}

export default Component;
