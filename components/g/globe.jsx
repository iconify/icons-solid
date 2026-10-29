import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vl5uzhbhz.css';
import '../../css/l/le3dx2lni.css';
import '../../css/i/ivt1z-bsn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vl5uzhbhz wm-a"/><path class="le3dx2lni wm-a"/><path class="ivt1z-bsn wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:globe"} {...others} />);
}

export default Component;
