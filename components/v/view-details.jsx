import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqfv4hn_o.css';
import '../../css/w/wqp7zgnaz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tqfv4hn_o"/><path class="wqp7zgnaz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:view-details"} {...others} />);
}

export default Component;
