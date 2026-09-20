import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yj_e_3bzh.css';
import '../../css/c/cys13zb4y.css';
import '../../css/k/kxl37ibsb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yj_e_3bzh"/><path class="cys13zb4y"/><path class="kxl37ibsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:phone-rotate3-duotone"} {...others} />);
}

export default Component;
