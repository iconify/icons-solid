import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/m2f-98b-g.css';
import '../../css/e/ermpxld1n.css';
import '../../css/u/ugycw5bkg.css';
import '../../css/m/msq3lnbyw.css';
import '../../css/v/v9qcr0r8o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="m2f-98b-g wm-shadow"/><path class="ermpxld1n"/><path class="ugycw5bkg"/><path class="msq3lnbyw"/><path class="v9qcr0r8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:briefcase"} {...others} />);
}

export default Component;
