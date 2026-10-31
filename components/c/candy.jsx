import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hqs70tf8f.css';
import '../../css/h/hk9ycdccx.css';
import '../../css/f/fias-s_rc.css';
import '../../css/t/t09pcfr5l.css';
import '../../css/x/xf_vo7put.css';
import '../../css/p/pzd0r140e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="hqs70tf8f wm-shadow"/><path class="hk9ycdccx wm-shadow"/><path class="fias-s_rc"/><path class="t09pcfr5l"/><path class="xf_vo7put"/><path class="pzd0r140e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:candy"} {...others} />);
}

export default Component;
