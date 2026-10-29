import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hbzcs2ysw.css';
import '../../css/a/a4la02b0t.css';
import '../../css/d/dk_c-sb7y.css';
import '../../css/h/hzbldnbux.css';
import '../../css/v/vjpnyegoq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hbzcs2ysw wm-k"/><path class="a4la02b0t wm-shadow"/><path class="dk_c-sb7y wm-k"/><path class="hzbldnbux wm-a"/><path class="vjpnyegoq wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:poinsettia-engrave"} {...others} />);
}

export default Component;
