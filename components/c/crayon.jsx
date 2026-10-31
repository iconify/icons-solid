import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/u010d9bcd.css';
import '../../css/p/pbarkg7pc.css';
import '../../css/s/sal31b4vw.css';
import '../../css/p/px36brfik.css';
import '../../css/c/c2ss5ondi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="u010d9bcd wm-shadow"/><path class="pbarkg7pc"/><path class="sal31b4vw"/><path class="px36brfik"/><path class="c2ss5ondi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:crayon"} {...others} />);
}

export default Component;
