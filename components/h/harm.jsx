import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/z/z2z8s690m.css';
import '../../css/d/dlenz_bwo.css';
import '../../css/s/stb41lb3k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="z2z8s690m"/><path class="dlenz_bwo"/><path class="stb41lb3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:harm"} {...others} />);
}

export default Component;
