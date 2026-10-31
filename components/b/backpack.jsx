import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/b/bo0l3mb8s.css';
import '../../css/w/wx-83ebpl.css';
import '../../css/w/w1qsz66fh.css';
import '../../css/s/spbohtbnc.css';
import '../../css/t/tcj9osbat.css';
import '../../css/t/tyzxy1b3r.css';
import '../../css/k/k7do8rkvd.css';
import '../../css/t/tfnbziums.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="bo0l3mb8s"/><path class="wx-83ebpl"/><path class="w1qsz66fh wm-shine"/><path class="spbohtbnc wm-k"/><path class="tcj9osbat wm-a"/><path class="tyzxy1b3r"/><path class="k7do8rkvd"/><path class="tfnbziums wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:backpack"} {...others} />);
}

export default Component;
