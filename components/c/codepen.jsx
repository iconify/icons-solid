import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jy69amb2v.css';
import '../../css/u/umu3d-h-o.css';
import '../../css/z/zlsq9ybxs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jy69amb2v"/><path class="umu3d-h-o"/><path class="zlsq9ybxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:codepen"} {...others} />);
}

export default Component;
