import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/an5ylwb3u.css';
import '../../css/f/fe5ciqmkb.css';
import '../../css/f/fsp10ybsu.css';
import '../../css/m/mpmv_oc4p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="an5ylwb3u"/><path class="fe5ciqmkb"/><path class="fsp10ybsu"/><path class="mpmv_oc4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brain"} {...others} />);
}

export default Component;
