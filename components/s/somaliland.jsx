import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xlqnqzbza.css';
import '../../css/n/nvb776bbv.css';
import '../../css/h/hccbgyqbo.css';
import '../../css/g/gsbiw_bqg.css';
import '../../css/m/mvaisabrg.css';
import '../../css/h/h7_ud_g8u.css';
import '../../css/q/q8_wp675v.css';
import '../../css/d/dg9xxuxzk.css';
import '../../css/b/b5puiuopy.css';
import '../../css/j/jte5qkb7h.css';
import '../../css/o/o5vmhhbvz.css';
import '../../css/q/qlm51tbyz.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="xlqnqzbza"/><path class="nvb776bbv"/><path class="hccbgyqbo"/><path class="gsbiw_bqg"/><path class="mvaisabrg"/><path class="h7_ud_g8u"/><path class="q8_wp675v"/><path class="dg9xxuxzk"/><path class="b5puiuopy"/><path class="jte5qkb7h"/><path class="o5vmhhbvz"/><path class="qlm51tbyz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:somaliland"} {...others} />);
}

export default Component;
