import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gdcsdub4h.css';
import '../../css/z/zupry6i0r.css';
import '../../css/s/sy13yh05l.css';
import '../../css/d/d3-dvhb1z.css';
import '../../css/t/t-k6er95i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="gdcsdub4h"/><path class="wm-k zupry6i0r"/><path class="sy13yh05l wm-k"/><path class="d3-dvhb1z wm-a"/><path class="t-k6er95i wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:kalash-sketch"} {...others} />);
}

export default Component;
