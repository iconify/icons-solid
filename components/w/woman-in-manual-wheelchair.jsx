import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gm9294b3s.css';
import '../../css/x/x4t5v5w5k.css';
import '../../css/s/s4m1sv55m.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gm9294b3s"/><path class="x4t5v5w5k"/><path class="s4m1sv55m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-in-manual-wheelchair"} {...others} />);
}

export default Component;
