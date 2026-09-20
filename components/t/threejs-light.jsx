import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pvl2anbys.css';
import '../../css/v/vagq61bug.css';
import '../../css/r/rj2_rc7to.css';
import '../../css/w/wa9awwb1r.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="pvl2anbys"/><path clip-rule="evenodd" class="vagq61bug"/><path clip-rule="evenodd" class="rj2_rc7to"/><path clip-rule="evenodd" class="wa9awwb1r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:threejs-light"} {...others} />);
}

export default Component;
