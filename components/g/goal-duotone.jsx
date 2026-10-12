import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ntalukx4g.css';
import '../../css/u/uz2zlbsii.css';
import '../../css/e/e_kf83boc.css';
import '../../css/a/aeeeoz6sm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ntalukx4g"/><path class="uz2zlbsii"/><path class="e_kf83boc"/><path class="aeeeoz6sm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:goal-duotone"} {...others} />);
}

export default Component;
