import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lyz3fuknv.css';
import '../../css/z/zh7yrubjw.css';
import '../../css/c/cdnvyfk7r.css';
import '../../css/k/k8brllbsz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="lyz3fuknv"/><path class="wm-k zh7yrubjw"/><path class="cdnvyfk7r wm-k"/><path class="k8brllbsz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:clipboard-sketch"} {...others} />);
}

export default Component;
