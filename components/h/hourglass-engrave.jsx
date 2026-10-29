import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/ca-1d_bkz.css';
import '../../css/y/yr1wpj77v.css';
import '../../css/p/p_kl59b1m.css';
import '../../css/j/j90xqmbyp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ca-1d_bkz"/><path class="wm-shadow yr1wpj77v"/><path class="p_kl59b1m"/><path class="j90xqmbyp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hourglass-engrave"} {...others} />);
}

export default Component;
