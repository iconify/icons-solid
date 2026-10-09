import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7olx61gw.css';
import '../../css/p/pru8skb1p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r7olx61gw"/><path class="pru8skb1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:keyboard-48"} {...others} />);
}

export default Component;
