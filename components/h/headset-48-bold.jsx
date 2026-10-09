import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jr8phfb8h.css';
import '../../css/u/uyuy9qbxm.css';
import '../../css/v/vfxz7qx3l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jr8phfb8h"/><path class="uyuy9qbxm"/><path class="vfxz7qx3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:headset-48-bold"} {...others} />);
}

export default Component;
