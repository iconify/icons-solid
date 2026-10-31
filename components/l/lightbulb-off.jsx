import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/u/u17sn60gz.css';
import '../../css/p/p_awbkb5a.css';
import '../../css/e/e7nou4btv.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/k/klzcy0ogc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="u17sn60gz"/><path class="p_awbkb5a wm-shine"/><path class="e7nou4btv wm-k"/><path class="qr4ochb5c wm-s"/><path class="klzcy0ogc wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:lightbulb-off"} {...others} />);
}

export default Component;
