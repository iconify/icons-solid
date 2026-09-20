import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8b1owz0y.css';
import '../../css/c/cpfb2_bfw.css';
import '../../css/c/cxbhvgb4x.css';
import '../../css/z/zzr8snbyp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r8b1owz0y"/><path class="cpfb2_bfw"/><path class="cxbhvgb4x"/><path class="zzr8snbyp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:account-group"} {...others} />);
}

export default Component;
