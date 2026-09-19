import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/o/otvcnlb6x.css';
import '../../css/k/k_zcsk45o.css';
import '../../css/o/oad6xcb_k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path clip-rule="evenodd" class="otvcnlb6x"/><path class="k_zcsk45o"/><path class="oad6xcb_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:nutrition"} {...others} />);
}

export default Component;
