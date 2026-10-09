import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ceecc4bcw.css';
import '../../css/d/d6cvwtbsp.css';
import '../../css/s/sadwe2bbu.css';
import '../../css/x/xivft9bkh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ceecc4bcw"/><path class="d6cvwtbsp"/><path class="sadwe2bbu"/><path class="xivft9bkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:biomethane-plant-48-bold"} {...others} />);
}

export default Component;
