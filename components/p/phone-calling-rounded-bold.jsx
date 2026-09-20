import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zz9d3cczj.css';
import '../../css/p/pr0u_cb3y.css';
import '../../css/k/kw0jftbzj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zz9d3cczj"/><path class="pr0u_cb3y"/><path class="kw0jftbzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:phone-calling-rounded-bold"} {...others} />);
}

export default Component;
