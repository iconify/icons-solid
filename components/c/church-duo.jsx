import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n6banyksa.css';
import '../../css/r/rj2e_2hxk.css';
import '../../css/z/zrm_tfaxl.css';
import '../../css/y/y_fqobb9e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="n6banyksa"/><path class="rj2e_2hxk wm-s"/><path class="zrm_tfaxl"/><path class="wm-a y_fqobb9e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:church-duo"} {...others} />);
}

export default Component;
