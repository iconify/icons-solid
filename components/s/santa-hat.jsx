import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rr1xybbeg.css';
import '../../css/x/xbu2w4wpm.css';
import '../../css/a/ahtpa2bco.css';
import '../../css/i/iztf4f7lf.css';
import '../../css/g/gp5_u6bnd.css';
import '../../css/p/psus5pr8r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="rr1xybbeg wm-shadow"/><path class="wm-shadow xbu2w4wpm"/><path class="ahtpa2bco"/><path class="iztf4f7lf"/><path class="gp5_u6bnd"/><path class="psus5pr8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:santa-hat"} {...others} />);
}

export default Component;
