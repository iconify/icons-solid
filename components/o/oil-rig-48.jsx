import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exb5o8bii.css';
import '../../css/h/hd9r6tb-k.css';
import '../../css/e/etujiwxzv.css';
import '../../css/i/i7nyym9lt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="exb5o8bii"/><path class="hd9r6tb-k"/><path class="etujiwxzv"/><path class="i7nyym9lt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:oil-rig-48"} {...others} />);
}

export default Component;
