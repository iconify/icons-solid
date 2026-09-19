import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/syanz0xqe.css';
import '../../css/m/mrca2uc4y.css';
import '../../css/r/r72cq5izs.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="syanz0xqe"/><path class="mrca2uc4y"/><path class="r72cq5izs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:knot"} {...others} />);
}

export default Component;
