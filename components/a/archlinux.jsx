import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w9seynbrw.css';
import '../../css/b/bz2e_vbhp.css';
import '../../css/c/cq1gd6biw.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="w9seynbrw"><path class="bz2e_vbhp"/><path class="cq1gd6biw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:archlinux"} {...others} />);
}

export default Component;
