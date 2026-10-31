import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wtmdgbf5n.css';
import '../../css/s/st5a0zb3w.css';
import '../../css/g/g2x2f9bob.css';
import '../../css/r/r0tr926_f.css';
import '../../css/c/c05zwcc_g.css';
import '../../css/a/a_e_1ccuh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow wtmdgbf5n"/><path class="st5a0zb3w"/><path class="g2x2f9bob"/><path class="r0tr926_f"/><path class="c05zwcc_g"/><path class="a_e_1ccuh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:piano"} {...others} />);
}

export default Component;
