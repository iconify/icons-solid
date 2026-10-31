import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fbgr70b6s.css';
import '../../css/a/aqr_o8bte.css';
import '../../css/f/fyt1i_b0a.css';
import '../../css/y/yx3k_2kij.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="fbgr70b6s wm-shadow"/><path class="aqr_o8bte"/><path class="fyt1i_b0a"/><path class="yx3k_2kij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:golf"} {...others} />);
}

export default Component;
