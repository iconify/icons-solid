import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tn55ge7zx.css';
import '../../css/b/bqhz5iotd.css';
import '../../css/o/otqgkxb6x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="tn55ge7zx"><path class="bqhz5iotd"/><path class="otqgkxb6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:phone-video-call"} {...others} />);
}

export default Component;
