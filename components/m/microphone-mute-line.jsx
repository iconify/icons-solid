import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ic9831big.css';
import '../../css/a/as9o91e1g.css';
import '../../css/f/fgt-s_bka.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 ic9831big"/><path class="as9o91e1g clr-i-outline clr-i-outline-path-2"/><path class="clr-i-outline clr-i-outline-path-3 fgt-s_bka"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:microphone-mute-line"} {...others} />);
}

export default Component;
