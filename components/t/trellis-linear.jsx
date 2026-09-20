import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pz43xhblp.css';
import '../../css/e/efno7rbxx.css';
import '../../css/n/njxkp0atg.css';
import '../../css/b/b_6489u2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pz43xhblp"/><path class="efno7rbxx"/><path class="njxkp0atg"/><path class="b_6489u2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:trellis-linear"} {...others} />);
}

export default Component;
