import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tb-dkyakg.css';
import '../../css/b/bs7qipb-w.css';
import '../../css/i/iosag-ytp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tb-dkyakg"/><path class="bs7qipb-w"/><path class="iosag-ytp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:hospital"} {...others} />);
}

export default Component;
