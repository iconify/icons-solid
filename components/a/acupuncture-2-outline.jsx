import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sm89wjbmb.css';
import '../../css/l/l-5pmmbld.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="sm89wjbmb"/><path class="l-5pmmbld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:acupuncture-2-outline"} {...others} />);
}

export default Component;
