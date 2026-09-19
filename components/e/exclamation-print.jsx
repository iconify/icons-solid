import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/d/dkc7u9v5q.css';
import '../../css/c/cl0ol6klf.css';
import '../../css/h/hmvgntdxp.css';
import '../../css/k/kiq_-eb_n.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path clip-rule="evenodd" class="dkc7u9v5q"/><path class="cl0ol6klf"/></g><path clip-rule="evenodd" class="hmvgntdxp"/><path class="kiq_-eb_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:exclamation-print"} {...others} />);
}

export default Component;
