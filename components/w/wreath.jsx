import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/ccow136rt.css';
import '../../css/w/wowppxbpp.css';
import '../../css/s/sfqwm72wc.css';
import '../../css/o/o8yo3swbu.css';
import '../../css/x/xlv8-kb2h.css';
import '../../css/f/fbeshnbmb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ccow136rt wm-shadow"/><path class="wowppxbpp"/><path class="sfqwm72wc"/><path class="o8yo3swbu"/><path class="xlv8-kb2h"/><path class="fbeshnbmb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:wreath"} {...others} />);
}

export default Component;
