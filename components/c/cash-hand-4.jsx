import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j5w07jb0m.css';
import '../../css/o/ofbq5pbjj.css';
import '../../css/c/cw3vay9eg.css';
import '../../css/m/mwlp155rd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j5w07jb0m"/><path class="ofbq5pbjj"/><path class="cw3vay9eg"/><path class="mwlp155rd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:cash-hand-4"} {...others} />);
}

export default Component;
