import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/n/nh7mpvbel.css';
import '../../css/m/mh0xd-bff.css';
import '../../css/s/sxgl_euno.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="nh7mpvbel"/><path class="mh0xd-bff"/><path class="sxgl_euno"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:speaker"} {...others} />);
}

export default Component;
