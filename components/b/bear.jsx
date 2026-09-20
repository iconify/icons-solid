import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjo_ierie.css';
import '../../css/n/n4cmayroc.css';
import '../../css/z/z8szqbbhz.css';
import '../../css/d/dbv864swk.css';
import '../../css/i/i26g8db7o.css';
import '../../css/i/ibwo_2fsy.css';
import '../../css/t/tgv7n4j2u.css';
import '../../css/b/bldcl9bcs.css';
import '../../css/m/m0rr3ob_d.css';
import '../../css/t/tpfi6eauu.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="vjo_ierie"/><path class="n4cmayroc"/><path class="z8szqbbhz"/><path class="dbv864swk"/><circle class="i26g8db7o"/><path class="ibwo_2fsy"/><path class="tgv7n4j2u"/><circle class="bldcl9bcs"/><path class="m0rr3ob_d"/><path class="tpfi6eauu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bear"} {...others} />);
}

export default Component;
