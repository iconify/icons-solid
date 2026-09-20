import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jhhjz8oqb.css';
import '../../css/b/b1ifi5b5t.css';
import '../../css/p/p-kc9i0qt.css';
import '../../css/k/k817htbwv.css';
import '../../css/j/j1lcqnbmi.css';
import '../../css/q/qgtu8hy_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jhhjz8oqb"/><path class="b1ifi5b5t"/><path class="p-kc9i0qt"/><path class="k817htbwv"/><path class="j1lcqnbmi"/><path class="qgtu8hy_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:money-bag-dollar"} {...others} />);
}

export default Component;
