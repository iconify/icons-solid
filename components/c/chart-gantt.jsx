import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xiuqmrx3k.css';
import '../../css/b/b3p7hxkhs.css';
import '../../css/g/gbti6mb3v.css';
import '../../css/x/xo-d7q-uy.css';
import '../../css/i/ie5i9ob8n.css';
import '../../css/q/qhcbn4bnl.css';
import '../../css/m/ma8zybbdi.css';
import '../../css/w/wnyi15b0i.css';
import '../../css/o/onljn5b_r.css';
import '../../css/w/wqjqycb_s.css';
import '../../css/u/usy5dtoiz.css';
import '../../css/w/w262-1aad.css';
import '../../css/v/vpbiktx8w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow xiuqmrx3k"/><path class="b3p7hxkhs wm-k"/><path class="gbti6mb3v wm-k"/><path class="wm-k xo-d7q-uy"/><path class="ie5i9ob8n wm-k"/><path class="qhcbn4bnl wm-shine"/><path class="ma8zybbdi wm-k"/><path class="wm-a wnyi15b0i"/><path class="onljn5b_r wm-a"/><path class="wm-a wqjqycb_s"/><path class="usy5dtoiz wm-a"/><path class="w262-1aad wm-a"/><path class="vpbiktx8w wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:chart-gantt"} {...others} />);
}

export default Component;
