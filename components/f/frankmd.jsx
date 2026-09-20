import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-9q7jndu.css';
import '../../css/w/w7g6xbcav.css';
import '../../css/z/zriji99vw.css';
import '../../css/p/pct59xb5m.css';
import '../../css/s/sxtd3vc6r.css';
import '../../css/c/crvtldb4u.css';
import '../../css/w/wdr5qnbdq.css';
import '../../css/w/w8wc1ebii.css';
import '../../css/a/airn1e4ri.css';
import '../../css/i/ilm7lkbmo.css';
import '../../css/f/fz355mbxc.css';
import '../../css/n/n2gbb5b5q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r-9q7jndu"/><path class="w7g6xbcav"/><path class="zriji99vw"/><path class="pct59xb5m"/><path class="sxtd3vc6r"/><path class="crvtldb4u"/><path class="wdr5qnbdq"/><path class="w8wc1ebii"/><path class="airn1e4ri"/><path class="ilm7lkbmo"/><path class="fz355mbxc"/><path class="n2gbb5b5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:frankmd"} {...others} />);
}

export default Component;
