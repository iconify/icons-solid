import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k90ttjb1t.css';
import '../../css/e/e_x3zybkg.css';
import '../../css/b/bb61rfb2j.css';
import '../../css/v/v7m8z84mo.css';
import '../../css/y/ye1l8cv6k.css';
import '../../css/z/zdn3bzbcl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="k90ttjb1t wm-shadow"/><path class="e_x3zybkg"/><path class="bb61rfb2j"/><path class="v7m8z84mo"/><path class="ye1l8cv6k"/><path class="zdn3bzbcl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:thandai"} {...others} />);
}

export default Component;
