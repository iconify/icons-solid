import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c750knbff.css';
import '../../css/l/l_t-shbzk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="c750knbff wm-k"/><path class="l_t-shbzk wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:braces-sketch"} {...others} />);
}

export default Component;
