import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/utixr_b0r.css';
import '../../css/o/ozvr6u7cb.css';
import '../../css/n/nurt28f2s.css';
import '../../css/x/x4ipj-d2q.css';
import '../../css/o/osljoeb2y.css';
import '../../css/e/eczkepb3q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="utixr_b0r"/><path class="ozvr6u7cb"/><path class="nurt28f2s"/><path class="x4ipj-d2q"/><path class="osljoeb2y"/><path class="eczkepb3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:police"} {...others} />);
}

export default Component;
