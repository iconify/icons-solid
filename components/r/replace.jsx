import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dvuo_7gtb.css';
import '../../css/g/gdqxo6bki.css';
import '../../css/y/yt8-h8bsb.css';
import '../../css/c/cfhjsebni.css';
import '../../css/y/ygp-2ybmo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="dvuo_7gtb"/><path class="gdqxo6bki wm-shine"/><path class="wm-k yt8-h8bsb"/><path class="cfhjsebni wm-a"/><path class="wm-deco ygp-2ybmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:replace"} {...others} />);
}

export default Component;
