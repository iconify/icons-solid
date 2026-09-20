import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/a/a9_uotrdh.css';
import '../../css/x/xbkijzf_s.css';
import '../../css/a/a5tva_bys.css';
import '../../css/s/spcgt18ba.css';
import '../../css/v/vixwikbso.css';
import '../../css/c/c12m-i8cv.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="a9_uotrdh"/><path clip-rule="evenodd" class="xbkijzf_s"/><path class="a5tva_bys"/><path clip-rule="evenodd" class="spcgt18ba"/></g><path clip-rule="evenodd" class="vixwikbso"/><path clip-rule="evenodd" class="c12m-i8cv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:fast-forward"} {...others} />);
}

export default Component;
