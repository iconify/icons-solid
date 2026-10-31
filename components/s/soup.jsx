import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/u/upru58brd.css';
import '../../css/c/cvimgbbzz.css';
import '../../css/r/robcqnbje.css';
import '../../css/a/aedlnnets.css';
import '../../css/g/g0jhk334h.css';
import '../../css/u/u29_bwbji.css';
import '../../css/r/rkm_7kbri.css';
import '../../css/h/hlyvh2u7z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="upru58brd"/><path class="cvimgbbzz"/><path class="robcqnbje wm-shine"/><path class="aedlnnets wm-k"/><path class="g0jhk334h wm-a"/><path class="u29_bwbji"/><path class="rkm_7kbri"/><path class="hlyvh2u7z wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:soup"} {...others} />);
}

export default Component;
