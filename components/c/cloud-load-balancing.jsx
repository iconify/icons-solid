import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7sr6ubzr.css';
import '../../css/v/vs3fkib1g.css';
import '../../css/n/n0xp5pbcg.css';
import '../../css/y/yt4z46l9y.css';
import '../../css/t/tosr--yyi.css';
import '../../css/r/rp-oky0ep.css';
import '../../css/j/jjj1k6bgt.css';
import '../../css/h/hrfk1fgjm.css';
import '../../css/p/pyutd00mi.css';
import '../../css/c/c5dr8mbyc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i7sr6ubzr"/><path class="vs3fkib1g"/><path class="n0xp5pbcg"/><path class="yt4z46l9y"/><path class="tosr--yyi"/><path class="rp-oky0ep"/><path class="jjj1k6bgt"/><path class="hrfk1fgjm"/><path class="pyutd00mi"/><path class="c5dr8mbyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-load-balancing"} {...others} />);
}

export default Component;
