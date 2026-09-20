import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbowa9bhc.css';
import '../../css/c/cxfi88b7i.css';
import '../../css/d/dnop8sbwg.css';
import '../../css/s/sefv2fb_q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rbowa9bhc"/><path class="cxfi88b7i"/><path class="dnop8sbwg"/><path class="sefv2fb_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-home"} {...others} />);
}

export default Component;
