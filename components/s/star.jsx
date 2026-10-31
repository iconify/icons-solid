import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/x/xbshj_bok.css';
import '../../css/n/n10tmjbpw.css';
import '../../css/s/s4w6e9bmy.css';
import '../../css/k/k-rm_2xlq.css';
import '../../css/p/p06-fgued.css';
import '../../css/u/uxrug8btb.css';
import '../../css/f/ffimdjyut.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="xbshj_bok"/><path class="n10tmjbpw"/><path class="s4w6e9bmy wm-shine"/><path class="k-rm_2xlq"/><path class="p06-fgued"/><path class="uxrug8btb"/><path class="ffimdjyut wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:star"} {...others} />);
}

export default Component;
