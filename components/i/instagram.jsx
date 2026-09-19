import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l6-iy8s0j.css';
import '../../css/c/cqteb8bfj.css';
import '../../css/v/vd35ges3z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="l6-iy8s0j"/><path class="cqteb8bfj"/><path class="vd35ges3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:instagram"} {...others} />);
}

export default Component;
