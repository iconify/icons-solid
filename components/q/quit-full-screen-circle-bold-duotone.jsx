import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnb90nbxf.css';
import '../../css/i/ijzot5blw.css';
import '../../css/i/ilfmvncty.css';
import '../../css/s/swg6q8buh.css';
import '../../css/n/ngp5n-n4e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rnb90nbxf"/><path class="ijzot5blw"/><path class="ilfmvncty"/><path class="swg6q8buh"/><path class="ngp5n-n4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:quit-full-screen-circle-bold-duotone"} {...others} />);
}

export default Component;
