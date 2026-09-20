import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvu1ubcpn.css';
import '../../css/p/po8pqxbxi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bvu1ubcpn"/><path class="po8pqxbxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:rescript-interface"} {...others} />);
}

export default Component;
