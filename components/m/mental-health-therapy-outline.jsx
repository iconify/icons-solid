import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z6k8rbbrg.css';
import '../../css/h/h_70hbb5y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="z6k8rbbrg"/><path clip-rule="evenodd" class="h_70hbb5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:mental-health-therapy-outline"} {...others} />);
}

export default Component;
