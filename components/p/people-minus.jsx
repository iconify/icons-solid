import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hyuv6wu2h.css';
import '../../css/d/ddkudlafx.css';
import '../../css/m/m7o59w0fd.css';
import '../../css/a/a5m6zzbwi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="hyuv6wu2h"/><path clip-rule="evenodd" class="ddkudlafx"/><path class="m7o59w0fd"/><path class="a5m6zzbwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:people-minus"} {...others} />);
}

export default Component;
