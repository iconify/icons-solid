import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/s/s2ph-vbgh.css';
import '../../css/q/qnb_nel_w.css';
import '../../css/h/hpb81aceh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="s2ph-vbgh"/><path class="qnb_nel_w"/><path class="hpb81aceh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:customer-support-3"} {...others} />);
}

export default Component;
