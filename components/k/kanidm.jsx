import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4deeebqw.css';
import '../../css/j/j68wpbcbm.css';
import '../../css/a/alxy5kb5z.css';
import '../../css/w/wya1gp9_c.css';
import '../../css/j/j_qdmj3db.css';
import '../../css/p/pyjneu3_z.css';
import '../../css/k/kzvgrplgj.css';
import '../../css/w/w2hhefwry.css';
import '../../css/z/zzq2mcbkw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c4deeebqw"/><path class="j68wpbcbm"/><path class="alxy5kb5z"/><path class="wya1gp9_c"/><path class="j_qdmj3db"/><path class="pyjneu3_z"/><path class="kzvgrplgj"/><path class="w2hhefwry"/><path class="zzq2mcbkw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kanidm"} {...others} />);
}

export default Component;
