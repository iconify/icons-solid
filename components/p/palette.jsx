import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6hs9ongt.css';
import '../../css/v/vj13mgbku.css';
import '../../css/n/nms6vjb0u.css';
import '../../css/k/ky84c4vcl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u6hs9ongt wm-k"/><path class="vj13mgbku wm-a"/><path class="nms6vjb0u wm-a"/><path class="ky84c4vcl wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:palette"} {...others} />);
}

export default Component;
