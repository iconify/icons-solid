import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uiwtf-lyp.css';
import '../../css/p/pyus203bj.css';
import '../../css/l/liq0-ubhp.css';
import '../../css/k/k30kpljgi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uiwtf-lyp"/><path class="pyus203bj"/><path class="liq0-ubhp"/><path class="k30kpljgi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:double-storey"} {...others} />);
}

export default Component;
