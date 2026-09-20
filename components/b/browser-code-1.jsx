import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/iio_dxbop.css';
import '../../css/r/r1udgjbvq.css';
import '../../css/h/hczf6ibuk.css';
import '../../css/g/gjcdhf15q.css';
import '../../css/m/mmcmppn7v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="iio_dxbop"/><path class="r1udgjbvq"/><path class="hczf6ibuk"/><path class="gjcdhf15q"/><path class="mmcmppn7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:browser-code-1"} {...others} />);
}

export default Component;
