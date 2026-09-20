import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bvxtgk-1g.css';
import '../../css/k/k_-se6r0l.css';
import '../../css/r/r6ijsrbda.css';
import '../../css/h/hvq0l_baf.css';
import '../../css/s/s-t_gnnkb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bvxtgk-1g"/><path class="k_-se6r0l"/><path class="r6ijsrbda"/><path class="hvq0l_baf"/><path class="s-t_gnnkb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:glass-beer-1"} {...others} />);
}

export default Component;
