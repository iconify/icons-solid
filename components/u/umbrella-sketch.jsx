import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p222eqb9m.css';
import '../../css/n/n15o_72hl.css';
import '../../css/q/qvvp1bbua.css';
import '../../css/l/l28o8au4h.css';
import '../../css/v/v9fhfkb7f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="p222eqb9m"/><path class="n15o_72hl wm-k"/><path class="qvvp1bbua wm-a"/><path class="l28o8au4h wm-k"/><path class="v9fhfkb7f wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:umbrella-sketch"} {...others} />);
}

export default Component;
