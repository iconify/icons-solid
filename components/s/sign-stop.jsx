import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fx8-3s55f.css';
import '../../css/x/x369u9ffe.css';
import '../../css/y/yp-e2_xcl.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="fx8-3s55f"/><path class="x369u9ffe"/><path class="yp-e2_xcl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:sign-stop"} {...others} />);
}

export default Component;
