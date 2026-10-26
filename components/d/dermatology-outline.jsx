import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v6u1dybet.css';
import '../../css/u/uew-crbtb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="v6u1dybet"/><path clip-rule="evenodd" class="uew-crbtb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:dermatology-outline"} {...others} />);
}

export default Component;
