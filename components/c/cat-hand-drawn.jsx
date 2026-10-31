import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k1ersf16u.css';
import '../../css/o/o2c9l_oyu.css';
import '../../css/z/z_4kpcc5z.css';
import '../../css/h/hdpsutbwp.css';
import '../../css/z/ziur9rb1m.css';
import '../../css/p/pavrhwb1d.css';
import '../../css/u/uu6sn7bla.css';
import '../../css/o/ol1_enbdy.css';
import '../../css/x/xfix46b3b.css';
import '../../css/t/tdh1yubsz.css';

const viewBox = {"width":100,"height":100};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="k1ersf16u"/><path class="o2c9l_oyu"/><path class="z_4kpcc5z"/><path class="hdpsutbwp"/><path class="ziur9rb1m"/><path class="pavrhwb1d"/><path class="uu6sn7bla"/><path class="ol1_enbdy"/><path class="xfix46b3b"/><path class="tdh1yubsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:cat-hand-drawn"} {...others} />);
}

export default Component;
