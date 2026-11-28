import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0q1g-bwc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n3n_5ybem.css';
import '../../css/z/zmhvgl95h.css';
import '../../css/p/pzji73r-b.css';
import '../../css/e/eslrxibqo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s0q1g-bwc secondary"/><g class="dt0cm9dhy primary"><path class="n3n_5ybem"/><path class="zmhvgl95h"/><path class="pzji73r-b"/><path class="eslrxibqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:newspaper-duo"} {...others} />);
}

export default Component;
