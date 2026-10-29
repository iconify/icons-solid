import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jlc_yjb6o.css';
import '../../css/i/i09ron92k.css';
import '../../css/x/xoi8mrm8l.css';
import '../../css/d/dydwk4bgd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jlc_yjb6o"/><path class="i09ron92k wm-a"/><path class="wm-k xoi8mrm8l"/><path class="dydwk4bgd wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:volume-sketch"} {...others} />);
}

export default Component;
