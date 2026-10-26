import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/moi0xxros.css';
import '../../css/j/j09n9kspr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="moi0xxros"/><path clip-rule="evenodd" class="j09n9kspr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:acupuncture-3-outline"} {...others} />);
}

export default Component;
