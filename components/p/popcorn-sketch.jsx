import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v0wa9lmog.css';
import '../../css/u/uv6xo5b9m.css';
import '../../css/j/jesj_obln.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="v0wa9lmog wm-k"/><path class="uv6xo5b9m wm-k"/><path class="jesj_obln wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:popcorn-sketch"} {...others} />);
}

export default Component;
