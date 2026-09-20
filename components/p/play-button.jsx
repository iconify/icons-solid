import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r9h-vxq5g.css';
import '../../css/s/suuc62d_l.css';
import '../../css/r/r6gzjgb-n.css';
import '../../css/u/uzv54sbmg.css';
import '../../css/b/bmsp2vnsd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r9h-vxq5g"/><path class="suuc62d_l"/><path class="r6gzjgb-n"/><path class="uzv54sbmg"/><path class="bmsp2vnsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:play-button"} {...others} />);
}

export default Component;
