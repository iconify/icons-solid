import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4deeebqw.css';
import '../../css/c/cfhfuudif.css';
import '../../css/a/alxy5kb5z.css';
import '../../css/y/yf2hsipbf.css';
import '../../css/v/vhswuub_q.css';
import '../../css/p/pyjneu3_z.css';
import '../../css/k/kzvgrplgj.css';
import '../../css/w/w2hhefwry.css';
import '../../css/l/la9bz5bmo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c4deeebqw"/><path class="cfhfuudif"/><path class="alxy5kb5z"/><path class="yf2hsipbf"/><path class="vhswuub_q"/><path class="pyjneu3_z"/><path class="kzvgrplgj"/><path class="w2hhefwry"/><path class="la9bz5bmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kanidm"} {...others} />);
}

export default Component;
