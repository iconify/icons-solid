import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gyepgqb2o.css';
import '../../css/v/vhrfcdf4h.css';
import '../../css/l/l3i7g_quo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gyepgqb2o"/><path clip-rule="evenodd" class="vhrfcdf4h"/><path class="l3i7g_quo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:star-badge-flat"} {...others} />);
}

export default Component;
