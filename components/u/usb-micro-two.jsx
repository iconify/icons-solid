import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/d/dit-i1b5h.css';
import '../../css/t/t4rl3tajf.css';
import '../../css/o/olp1xoh0o.css';
import '../../css/s/sxj1f8jvb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlXDTzzsm"><g class="wwvp95byt"><path class="dit-i1b5h"/><path class="t4rl3tajf"/><path class="olp1xoh0o"/><path class="sxj1f8jvb"/></g></mask></defs><path mask="url(#SVGlXDTzzsm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:usb-micro-two"} {...others} />);
}

export default Component;
