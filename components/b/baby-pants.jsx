import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/l/l8ifr32lo.css';
import '../../css/k/kmbmv0y3w.css';
import '../../css/r/revha38mc.css';
import '../../css/g/g6oxp7zue.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="l8ifr32lo"/><path class="kmbmv0y3w"/><path class="revha38mc"/><path class="g6oxp7zue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:baby-pants"} {...others} />);
}

export default Component;
