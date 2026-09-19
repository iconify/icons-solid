import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hky7yeb8h.css';
import '../../css/m/mfgm_vuzq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hky7yeb8h"/><path class="mfgm_vuzq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:file"} {...others} />);
}

export default Component;
