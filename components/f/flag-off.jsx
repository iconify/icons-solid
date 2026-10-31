import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/m/mv8ly4rii.css';
import '../../css/l/lh5ntbbie.css';
import '../../css/l/lcou3abui.css';
import '../../css/o/op1x1ovuv.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/n/n2yonroyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="mv8ly4rii"/><path class="lh5ntbbie wm-shine"/><path class="lcou3abui wm-k"/><path class="op1x1ovuv wm-a"/><path class="qr4ochb5c wm-s"/><path class="n2yonroyj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:flag-off"} {...others} />);
}

export default Component;
