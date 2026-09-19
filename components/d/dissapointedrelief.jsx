import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h32t530tv.css';
import '../../css/n/n9cednr3v.css';
import '../../css/e/eto5habog.css';
import '../../css/y/y-kv0yb_u.css';
import '../../css/q/qbjticgye.css';
import '../../css/e/e0-wpfbml.css';
import '../../css/n/nfh9zsbdl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h32t530tv"/><path class="n9cednr3v"/><path class="eto5habog"/><path class="y-kv0yb_u"/><path class="qbjticgye"/><path class="e0-wpfbml"/><path class="nfh9zsbdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:dissapointedrelief"} {...others} />);
}

export default Component;
