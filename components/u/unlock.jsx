import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/c/cj5vslb_x.css';
import '../../css/p/pppnfcb8p.css';
import '../../css/i/iu7n2nbwr.css';
import '../../css/b/b86buo32x.css';
import '../../css/l/l1s8gobzn.css';
import '../../css/l/ly2govbxl.css';
import '../../css/n/n_6dewjnr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="cj5vslb_x"/><path class="pppnfcb8p"/><path class="iu7n2nbwr wm-shine"/><path class="b86buo32x wm-k"/><path class="l1s8gobzn wm-a"/><path class="ly2govbxl"/><path class="n_6dewjnr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:unlock"} {...others} />);
}

export default Component;
