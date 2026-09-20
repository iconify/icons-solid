import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o7rfoac5c.css';
import '../../css/e/ewux62qsa.css';
import '../../css/u/uakbxbc6s.css';
import '../../css/p/p8uqrfrux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o7rfoac5c"/><path class="ewux62qsa"/><path class="uakbxbc6s"/><path class="p8uqrfrux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:pencil-clipboard"} {...others} />);
}

export default Component;
