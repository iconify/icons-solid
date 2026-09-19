import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4kufac2j.css';
import '../../css/f/fjwq2b_zi.css';
import '../../css/g/g46tn_ppl.css';
import '../../css/t/t0dur4bqd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w4kufac2j"/><path class="fjwq2b_zi"/><path class="g46tn_ppl"/><path class="t0dur4bqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ph-1x1"} {...others} />);
}

export default Component;
