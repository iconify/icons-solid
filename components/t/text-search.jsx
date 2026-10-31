import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xhco9ccle.css';
import '../../css/s/swagikazn.css';
import '../../css/f/f503kablk.css';
import '../../css/p/pll4n6bxw.css';
import '../../css/w/wdf764qml.css';
import '../../css/f/f57hfhbgv.css';
import '../../css/f/fpku1jqda.css';
import '../../css/n/nqsieebco.css';
import '../../css/j/j6iauu9wn.css';
import '../../css/j/j14y7kbod.css';
import '../../css/w/why8nabtq.css';
import '../../css/t/t6wa-5blk.css';
import '../../css/l/l9ye10beu.css';
import '../../css/q/qxotwwbhh.css';
import '../../css/w/winjcsb7p.css';
import '../../css/h/h__1zab3w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow xhco9ccle"/><path class="swagikazn wm-a"/><path class="f503kablk wm-a"/><path class="pll4n6bxw wm-a"/><path class="wdf764qml wm-a"/><path class="f57hfhbgv wm-a"/><path class="fpku1jqda wm-a"/><path class="nqsieebco wm-a"/><path class="j6iauu9wn wm-k"/><path class="j14y7kbod wm-k"/><path class="why8nabtq wm-k"/><path class="t6wa-5blk wm-k"/><path class="l9ye10beu wm-k"/><path class="qxotwwbhh wm-k"/><path class="winjcsb7p wm-k"/><path class="h__1zab3w wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:text-search"} {...others} />);
}

export default Component;
