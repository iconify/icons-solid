import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vutclfb6k.css';
import '../../css/u/u-v50-e0f.css';
import '../../css/g/guc7tvbkc.css';
import '../../css/k/kvinwubsz.css';
import '../../css/v/vuct3n4cd.css';
import '../../css/m/maqpkpb4p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vutclfb6k wm-k"/><path class="u-v50-e0f wm-k"/><path class="guc7tvbkc wm-k"/><path class="kvinwubsz wm-k"/><path class="vuct3n4cd wm-shine"/><path class="maqpkpb4p wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:shield-plus"} {...others} />);
}

export default Component;
