import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/t/tn_3d9b0b.css';
import '../../css/c/cwhbfnber.css';
import '../../css/g/ghycr5fzr.css';
import '../../css/n/naeb0abdw.css';
import '../../css/c/clf7bkh7f.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="tn_3d9b0b"/><path class="cwhbfnber"/><path class="ghycr5fzr wm-shine"/><path class="naeb0abdw wm-k"/><path class="clf7bkh7f wm-a"/><path class="qr4ochb5c wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:image-off"} {...others} />);
}

export default Component;
