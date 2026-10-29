import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ie9ejj3-w.css';
import '../../css/p/pd_04xbwc.css';
import '../../css/a/a88uu03mv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ie9ejj3-w"/><path class="pd_04xbwc wm-shadow"/><path class="a88uu03mv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:loader-circle-engrave"} {...others} />);
}

export default Component;
