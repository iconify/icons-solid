import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdpmiccce.css';
import '../../css/i/i6it53bol.css';
import '../../css/i/i1z6z-v6i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zdpmiccce"/><path class="i6it53bol"/><path class="i1z6z-v6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ice-melt-48"} {...others} />);
}

export default Component;
