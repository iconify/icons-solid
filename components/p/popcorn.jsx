import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/comv4tbbr.css';
import '../../css/w/wmbwapbtc.css';
import '../../css/g/glf4nlb0r.css';
import '../../css/c/cigqo1srh.css';
import '../../css/s/saplnu7xq.css';
import '../../css/j/jruwrubdj.css';
import '../../css/f/f2c_ldbty.css';
import '../../css/k/k7t45dbdj.css';
import '../../css/p/pypwapq1t.css';
import '../../css/d/dao3n566m.css';
import '../../css/a/ao6ls8bni.css';
import '../../css/i/iil9206ik.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="comv4tbbr wm-shadow"/><path class="wm-k wmbwapbtc"/><path class="glf4nlb0r wm-k"/><path class="cigqo1srh wm-k"/><path class="saplnu7xq wm-k"/><path class="jruwrubdj wm-shine"/><path class="f2c_ldbty wm-a"/><path class="k7t45dbdj wm-a"/><path class="pypwapq1t wm-a"/><path class="dao3n566m wm-a"/><path class="ao6ls8bni wm-a"/><path class="iil9206ik wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:popcorn"} {...others} />);
}

export default Component;
