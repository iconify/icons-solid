import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/f/fd9t0p82t.css';
import '../../css/m/m7dyedc6f.css';
import '../../css/t/tlre7czjn.css';
import '../../css/t/t2ev9-fdo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="fd9t0p82t"/><path class="m7dyedc6f"/><path class="tlre7czjn"/><path class="t2ev9-fdo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:electric-charging-station"} {...others} />);
}

export default Component;
