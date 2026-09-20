import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dybugtbml.css';
import '../../css/s/sgkrg3bsj.css';
import '../../css/h/hd_nw67sk.css';
import '../../css/g/gp_5yobro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dybugtbml"/><path class="sgkrg3bsj"/><path class="hd_nw67sk"/><path class="gp_5yobro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:music-album-1"} {...others} />);
}

export default Component;
