import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_bh6-v-a.css';
import '../../css/h/hnytd9b5z.css';
import '../../css/u/ux7dfvzra.css';
import '../../css/s/siai_tb_r.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/t/t2yzg7qtj.css';
import '../../css/a/a7fvcojxy.css';
import '../../css/v/vdyfv57dh.css';
import '../../css/r/r2hb2jpyg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p_bh6-v-a"/><path class="hnytd9b5z"/><path class="ux7dfvzra"/><path class="siai_tb_r"/><g class="xtpeb-edw"><path class="t2yzg7qtj"/><path class="a7fvcojxy"/><path class="vdyfv57dh"/><path class="r2hb2jpyg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:structure-bold-duotone"} {...others} />);
}

export default Component;
