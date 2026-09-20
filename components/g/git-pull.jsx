import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/es2q0bbgb.css';
import '../../css/c/cxua9cc6r.css';
import '../../css/t/tdtk3xqjc.css';
import '../../css/m/mo5qvibyu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="es2q0bbgb"/><path class="cxua9cc6r"/><path class="tdtk3xqjc"/><path class="mo5qvibyu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:git-pull"} {...others} />);
}

export default Component;
