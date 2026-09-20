import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y340dqb_o.css';
import '../../css/g/g9obdub0m.css';
import '../../css/g/gzrk74b3c.css';
import '../../css/d/du0d4fbst.css';
import '../../css/p/p1k-ruboo.css';
import '../../css/m/m-6rtq9pc.css';
import '../../css/s/scg9l48-k.css';
import '../../css/d/dc384956g.css';
import '../../css/x/xylam0brg.css';
import '../../css/s/suaze9bxy.css';
import '../../css/b/b9fvq8bov.css';
import '../../css/w/wdlvdtb4e.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="y340dqb_o"/><path class="g9obdub0m"/><path class="gzrk74b3c"/><path class="du0d4fbst"/><path class="p1k-ruboo"/><path class="m-6rtq9pc"/><path class="scg9l48-k"/><path class="dc384956g"/><path class="xylam0brg"/><ellipse class="suaze9bxy"/><path class="b9fvq8bov"/><path class="wdlvdtb4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ninja-medium-skin-tone"} {...others} />);
}

export default Component;
