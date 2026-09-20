import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw1iew.css';
import '../../css/p/pv261w.css';
import '../../css/q/qv815t.css';
import '../../css/y/y4wbml.css';
import '../../css/m/m_zist.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-290yip.css';
import '../../css/d/d-zqdz1o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iw1iew pv261w"/><path class="iw1iew qv815t y4wbml"/><path class="iw1iew m_zist y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:folder-multiple-twotone"} {...others} />);
}

export default Component;
