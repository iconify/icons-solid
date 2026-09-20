import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bsh_u4-0o.css';
import '../../css/q/qd2q1wwpm.css';
import '../../css/q/q6q31ps-d.css';
import '../../css/p/p084vk_ir.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bsh_u4-0o"/><path class="qd2q1wwpm"/><path class="q6q31ps-d"/><path class="p084vk_ir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:fries"} {...others} />);
}

export default Component;
