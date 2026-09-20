import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7h2m3bhv.css';
import '../../css/b/bpl-buwfn.css';
import '../../css/w/wy1tnscth.css';
import '../../css/k/krse0db4s.css';
import '../../css/c/czwptaczq.css';
import '../../css/o/o_ph2-s1e.css';
import '../../css/o/ocd42lnoy.css';
import '../../css/e/egdtubl0q.css';
import '../../css/p/pc48xdmom.css';
import '../../css/q/q8udlte8p.css';
import '../../css/u/uztq185ac.css';
import '../../css/k/kacz0st3c.css';
import '../../css/e/ek02d20kf.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="c7h2m3bhv"/><path class="bpl-buwfn"/><path class="wy1tnscth"/><path class="krse0db4s"/><path class="czwptaczq"/><path class="o_ph2-s1e"/><path class="ocd42lnoy"/><path class="egdtubl0q"/><path class="pc48xdmom"/><path class="q8udlte8p"/><path class="uztq185ac"/><path class="kacz0st3c"/><path class="ek02d20kf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:couple-with-heart-woman-woman-dark-skin-tone-medium-dark-skin-tone"} {...others} />);
}

export default Component;
