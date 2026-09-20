import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw1iew.css';
import '../../css/s/sd8ohw.css';
import '../../css/y/ydovum.css';
import '../../css/e/es_8rf.css';
import '../../css/f/fmw6en.css';
import '../../css/y/y4wbml.css';
import '../../css/o/okij4p.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-66.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/d/d-3crpcp.css';
import '../../css/d/d-70g21a.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iw1iew sd8ohw ydovum"/><path class="es_8rf ydovum"/><path class="fmw6en iw1iew y4wbml"/><path class="iw1iew okij4p y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:cellphone-arrow-down-twotone"} {...others} />);
}

export default Component;
