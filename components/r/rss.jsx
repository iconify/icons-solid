import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f4zfyrbxg.css';
import '../../css/n/ns-2lwbyv.css';
import '../../css/j/jdvm0xqmc.css';
import '../../css/o/otdef_bkp.css';
import '../../css/o/o_vtp66hr.css';
import '../../css/g/gx88m9iyh.css';
import '../../css/x/xeiqe0b3w.css';
import '../../css/s/swi215bij.css';
import '../../css/z/zf1vv6b2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f4zfyrbxg wm-shadow"/><path class="ns-2lwbyv wm-shadow"/><path class="jdvm0xqmc"/><path class="otdef_bkp"/><path class="o_vtp66hr"/><path class="gx88m9iyh"/><path class="wm-shine xeiqe0b3w"/><path class="swi215bij wm-shine"/><path class="zf1vv6b2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:rss"} {...others} />);
}

export default Component;
