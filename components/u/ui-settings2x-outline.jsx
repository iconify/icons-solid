import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hozhz6bfh.css';
import '../../css/d/d75k3fbhg.css';
import '../../css/c/c4ew_ccan.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hozhz6bfh"/><path class="d75k3fbhg"/><path class="c4ew_ccan"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ui-settings2x-outline"} {...others} />);
}

export default Component;
