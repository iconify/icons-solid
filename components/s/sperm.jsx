import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/q/qx1rt3bor.css';
import '../../css/l/l477l9bhb.css';
import '../../css/y/ybktkkb_v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path clip-rule="evenodd" class="qx1rt3bor"/><path class="l477l9bhb"/><path class="ybktkkb_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sperm"} {...others} />);
}

export default Component;
