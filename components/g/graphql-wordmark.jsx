import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/itdyfghly.css';
import '../../css/z/zqk8yv5ug.css';
import '../../css/n/nn0idcbhh.css';
import '../../css/e/eymcokbqb.css';
import '../../css/c/chi9rjb_y.css';
import '../../css/p/p7tslcb6a.css';
import '../../css/c/c_wjylblt.css';
import '../../css/q/qavubobdf.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="cuyn6tgcc"><path class="itdyfghly"/><path class="zqk8yv5ug"/><path class="nn0idcbhh"/><path class="eymcokbqb"/><path class="chi9rjb_y"/><path class="p7tslcb6a"/><path class="c_wjylblt"/><path class="qavubobdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:graphql-wordmark"} {...others} />);
}

export default Component;
