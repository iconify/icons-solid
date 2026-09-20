import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/esf_cdlak.css';
import '../../css/d/dxwmkobkt.css';
import '../../css/m/m79ns814e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="esf_cdlak"/><path class="dxwmkobkt"/><path class="m79ns814e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:microsoft-edge"} {...others} />);
}

export default Component;
