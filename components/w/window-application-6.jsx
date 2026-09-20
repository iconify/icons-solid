import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tige7vbdh.css';
import '../../css/t/tqjc_0e-l.css';
import '../../css/b/bfhqjrb7j.css';
import '../../css/n/n6czc1env.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tige7vbdh"/><path class="tqjc_0e-l"/><path class="bfhqjrb7j"/><path class="n6czc1env"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:window-application-6"} {...others} />);
}

export default Component;
