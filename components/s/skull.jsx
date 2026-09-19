import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/d/d7nsuhb5p.css';
import '../../css/k/k8mutcwuq.css';
import '../../css/n/nn56ddcae.css';
import '../../css/s/skwuo4btv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="d7nsuhb5p"/><path class="k8mutcwuq"/><path class="nn56ddcae"/><path class="skwuo4btv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:skull"} {...others} />);
}

export default Component;
