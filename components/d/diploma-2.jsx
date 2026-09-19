import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uz509tbyc.css';
import '../../css/y/yvlrv4bki.css';
import '../../css/m/mj4jn0bjh.css';
import '../../css/d/dmz258btd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uz509tbyc"/><path class="yvlrv4bki"/><path class="mj4jn0bjh"/><path class="dmz258btd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:diploma-2"} {...others} />);
}

export default Component;
