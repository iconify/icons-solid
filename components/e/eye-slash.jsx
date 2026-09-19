import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u_cglrb8o.css';
import '../../css/z/ztzwvfbwf.css';
import '../../css/s/sfkx2xqaz.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="u_cglrb8o"/><path class="ztzwvfbwf"/><path class="sfkx2xqaz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:eye-slash"} {...others} />);
}

export default Component;
