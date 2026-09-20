import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r78xt_b4d.css';
import '../../css/i/i3pkgebvb.css';
import '../../css/u/uqzicfr0o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="r78xt_b4d"/><path class="i3pkgebvb"/><path class="uqzicfr0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-case-open-bold-duotone"} {...others} />);
}

export default Component;
