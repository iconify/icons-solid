import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/koxstha1f.css';
import '../../css/v/vpp78ggra.css';
import '../../css/w/w2y3zvo5w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="koxstha1f"/><path class="vpp78ggra"/><path class="w2y3zvo5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:emulatorjs"} {...others} />);
}

export default Component;
