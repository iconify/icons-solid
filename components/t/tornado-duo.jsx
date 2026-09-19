import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a0ak6vbrb.css';
import '../../css/c/cyjsd2ifn.css';
import '../../css/f/fwnbb6bnz.css';
import '../../css/t/tpluclbsg.css';
import '../../css/f/fy1p8mbui.css';
import '../../css/c/cs7112bxr.css';
import '../../css/s/sr6vvehzd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="a0ak6vbrb"/><path class="cyjsd2ifn"/><path class="fwnbb6bnz"/><path class="tpluclbsg"/><path class="fy1p8mbui"/><path class="cs7112bxr"/><path class="sr6vvehzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tornado-duo"} {...others} />);
}

export default Component;
