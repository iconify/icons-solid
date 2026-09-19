import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zi5dy1bvd.css';
import '../../css/n/njfn9jsbh.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="zi5dy1bvd"/><path class="njfn9jsbh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:badge-3d-fill"} {...others} />);
}

export default Component;
