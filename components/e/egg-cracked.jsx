import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oc9_ggpyl.css';
import '../../css/x/x48ztfbzy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oc9_ggpyl"/><path class="x48ztfbzy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:egg-cracked"} {...others} />);
}

export default Component;
