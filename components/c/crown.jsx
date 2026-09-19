import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/p/po5fn9bwg.css';
import '../../css/k/k6w48jz1z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="po5fn9bwg"/><path class="k6w48jz1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:crown"} {...others} />);
}

export default Component;
