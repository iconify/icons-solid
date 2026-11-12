import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdzw2qd4h.css';
import '../../css/y/yrbx-abvk.css';
import '../../css/t/tqets1biq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gdzw2qd4h"/><path class="yrbx-abvk"/><path class="tqets1biq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-powerpoint-dark"} {...others} />);
}

export default Component;
