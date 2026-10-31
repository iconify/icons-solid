import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nljvcdb6q.css';
import '../../css/s/ssq5wczzl.css';
import '../../css/x/xr9shx81h.css';
import '../../css/u/ue5iehlfe.css';
import '../../css/t/tymb60b_r.css';
import '../../css/o/olnsx5brp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="nljvcdb6q wm-shadow"/><path class="ssq5wczzl wm-shadow"/><path class="xr9shx81h"/><path class="ue5iehlfe"/><path class="tymb60b_r"/><path class="olnsx5brp wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:lion-head"} {...others} />);
}

export default Component;
