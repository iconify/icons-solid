import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/e/eym2stwku.css';
import '../../css/q/qy7wletcv.css';
import '../../css/v/vz9cs25rz.css';
import '../../css/m/m3c5uac9e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="eym2stwku"/><path class="qy7wletcv"/><path class="vz9cs25rz"/><path class="m3c5uac9e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:emergency-call"} {...others} />);
}

export default Component;
