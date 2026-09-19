import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oth0a1bfn.css';
import '../../css/t/t-a9dubga.css';
import '../../css/a/a98oukb7r.css';
import '../../css/z/zf8ge10as.css';
import '../../css/z/z2kp6k8eh.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="oth0a1bfn"/><path class="t-a9dubga"/><path class="a98oukb7r"/><path class="zf8ge10as"/><path class="z2kp6k8eh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:angle-left-print"} {...others} />);
}

export default Component;
