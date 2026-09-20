import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/mexdldrmp.css';
import '../../css/r/r0xlvib1h.css';
import '../../css/v/v9-8lib4s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="mexdldrmp"/><path class="r0xlvib1h"/><path class="v9-8lib4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:whitesource-logo-3"} {...others} />);
}

export default Component;
