import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2p4lbbrb.css';
import '../../css/q/q0z4gbkbp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z2p4lbbrb"/><path class="q0z4gbkbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:beer-48-bold"} {...others} />);
}

export default Component;
