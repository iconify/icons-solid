import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gh_qezssh.css';
import '../../css/j/jecc0objv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="gh_qezssh"/><path class="jecc0objv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pathfinder-divide"} {...others} />);
}

export default Component;
