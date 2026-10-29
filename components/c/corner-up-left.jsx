import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/kpdz4ob1q.css';
import '../../css/r/rhd6e4bca.css';
import '../../css/t/tvpy8lbvs.css';
import '../../css/z/zmg2--rqo.css';
import '../../css/n/n3uj-sb8b.css';
import '../../css/n/nm-zfdc4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="kpdz4ob1q wm-shadow"/><path class="rhd6e4bca"/><path class="tvpy8lbvs"/><path class="zmg2--rqo"/><path class="n3uj-sb8b wm-shine"/><path class="nm-zfdc4r wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:corner-up-left"} {...others} />);
}

export default Component;
