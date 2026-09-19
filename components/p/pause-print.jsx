import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/x/xgl01hb1v.css';
import '../../css/s/sxd2klhxm.css';
import '../../css/e/evt5v2xqt.css';
import '../../css/y/y4mkzybqi.css';
import '../../css/i/i1p71g3hn.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="xgl01hb1v"/><path clip-rule="evenodd" class="sxd2klhxm"/><path class="evt5v2xqt"/><path clip-rule="evenodd" class="y4mkzybqi"/></g><path clip-rule="evenodd" class="i1p71g3hn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:pause-print"} {...others} />);
}

export default Component;
