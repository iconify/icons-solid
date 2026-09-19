import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/c/cw-iw1_ie.css';
import '../../css/i/im6flx-ax.css';
import '../../css/z/z-phgabtr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="cw-iw1_ie"/><path class="im6flx-ax"/><path class="z-phgabtr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:ghost"} {...others} />);
}

export default Component;
