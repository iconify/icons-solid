import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tecf02bgm.css';
import '../../css/i/iay28bc3j.css';
import '../../css/b/b4k3pebzr.css';
import '../../css/g/g8tn2v2pu.css';
import '../../css/q/qqgrn5b-m.css';
import '../../css/s/sv08iqzqu.css';
import '../../css/p/p1iw5mbvl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tecf02bgm"/><path class="iay28bc3j"/><path class="b4k3pebzr"/><path class="g8tn2v2pu"/><path class="qqgrn5b-m"/><path class="sv08iqzqu"/><path class="p1iw5mbvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:sleeping"} {...others} />);
}

export default Component;
