import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lavlmcboo.css';
import '../../css/h/hcg-04b2r.css';
import '../../css/u/uha626p8s.css';
import '../../css/z/zhsmirjnu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="lavlmcboo"/><path class="hcg-04b2r"/><path class="uha626p8s"/><path class="zhsmirjnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:power-duo"} {...others} />);
}

export default Component;
