import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ndqgjybjo.css';
import '../../css/g/gase2ezwa.css';
import '../../css/d/dq4f_vh_j.css';
import '../../css/b/bj8tdyqqz.css';
import '../../css/f/fazz-bbxt.css';
import '../../css/d/dtck0zb_k.css';
import '../../css/r/ro9-hcbdn.css';
import '../../css/d/dufuu7b9c.css';
import '../../css/c/cjfq7dbbd.css';
import '../../css/o/o4khh-v9q.css';
import '../../css/f/f3kdawnbh.css';
import '../../css/b/bb0f8_zli.css';
import '../../css/a/a8ukgccks.css';
import '../../css/u/uvxgvfbnf.css';
import '../../css/r/r51e6ebjk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ndqgjybjo"/><path class="gase2ezwa"/><path class="dq4f_vh_j"/><path class="bj8tdyqqz"/><path class="fazz-bbxt"/><path class="dtck0zb_k"/><path class="ro9-hcbdn"/><path class="dufuu7b9c"/><path class="cjfq7dbbd"/><path class="o4khh-v9q"/><path class="f3kdawnbh"/><path class="bb0f8_zli"/><path class="a8ukgccks"/><path class="uvxgvfbnf"/><path class="r51e6ebjk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:video-player-movie-2"} {...others} />);
}

export default Component;
