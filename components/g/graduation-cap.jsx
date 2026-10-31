import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/e/eog_xubil.css';
import '../../css/i/i1p2q1rio.css';
import '../../css/p/ple6f2bqk.css';
import '../../css/h/htokf4rzn.css';
import '../../css/l/l2miw0nqo.css';
import '../../css/v/v-r-rkbty.css';
import '../../css/u/uk2bzqiey.css';
import '../../css/a/aahnuuf6g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="eog_xubil"/><path class="i1p2q1rio"/><path class="ple6f2bqk wm-shine"/><path class="htokf4rzn wm-k"/><path class="l2miw0nqo wm-a"/><path class="v-r-rkbty"/><path class="uk2bzqiey"/><path class="aahnuuf6g wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:graduation-cap"} {...others} />);
}

export default Component;
