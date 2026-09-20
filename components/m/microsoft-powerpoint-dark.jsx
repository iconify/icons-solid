import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/meqtli98k.css';
import '../../css/m/my0pxftfv.css';
import '../../css/t/tqets1biq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="meqtli98k"/><path class="my0pxftfv"/><path class="tqets1biq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-powerpoint-dark"} {...others} />);
}

export default Component;
