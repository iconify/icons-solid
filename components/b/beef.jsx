import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/m/mscbpvyxr.css';
import '../../css/v/v31-xxb6x.css';
import '../../css/q/qzof9nhok.css';
import '../../css/u/u5j49objb.css';
import '../../css/y/ygp-2ybmo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="mscbpvyxr"/><path class="v31-xxb6x wm-shine"/><path class="qzof9nhok wm-k"/><path class="u5j49objb wm-a"/><path class="wm-deco ygp-2ybmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:beef"} {...others} />);
}

export default Component;
