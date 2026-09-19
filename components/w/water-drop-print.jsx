import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/k/k9-ief91f.css';
import '../../css/x/xe5cxnbbr.css';
import '../../css/v/vri033z6n.css';
import '../../css/h/h169u-bvh.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="k9-ief91f"/><path clip-rule="evenodd" class="xe5cxnbbr"/></g><path clip-rule="evenodd" class="vri033z6n"/><path clip-rule="evenodd" class="h169u-bvh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:water-drop-print"} {...others} />);
}

export default Component;
