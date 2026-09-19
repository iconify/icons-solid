import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yk-vr0bug.css';
import '../../css/v/vazhcubhi.css';
import '../../css/z/zz_28pvge.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yk-vr0bug"/><path class="vazhcubhi"/><path clip-rule="evenodd" class="zz_28pvge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blood-b-n-24px"} {...others} />);
}

export default Component;
