import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ik19wxu2o.css';
import '../../css/q/q9hb2zs7n.css';
import '../../css/r/ryuyffwfo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ik19wxu2o"/><path class="q9hb2zs7n wm-shadow"/><path class="ryuyffwfo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:align-justify-engrave"} {...others} />);
}

export default Component;
