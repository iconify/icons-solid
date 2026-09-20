import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw1iew.css';
import '../../css/m/m_86pu.css';
import '../../css/y/ydovum.css';
import '../../css/u/uj17_n.css';
import '../../css/f/fmw6en.css';
import '../../css/y/y4wbml.css';
import '../../css/o/okij4p.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-70.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/d/d-4c0-hc.css';
import '../../css/d/d-i58k3z.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iw1iew m_86pu ydovum"/><path class="uj17_n ydovum"/><path class="fmw6en iw1iew y4wbml"/><path class="iw1iew okij4p y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:tablet-arrow-down-twotone"} {...others} />);
}

export default Component;
