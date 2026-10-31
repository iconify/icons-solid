import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/a/awz2ckbxc.css';
import '../../css/w/wj6rrnm-u.css';
import '../../css/p/paob__tuf.css';
import '../../css/j/jffir3tnu.css';
import '../../css/s/spyerhbkn.css';
import '../../css/z/zr33d1b2c.css';
import '../../css/k/kg6-vmgwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="awz2ckbxc"/><path class="wj6rrnm-u"/><path class="paob__tuf wm-shine"/><path class="jffir3tnu wm-k"/><path class="spyerhbkn wm-a"/><path class="wm-s zr33d1b2c"/><path class="kg6-vmgwc wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:love-letter"} {...others} />);
}

export default Component;
