import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o7o3n1bzz.css';
import '../../css/f/fhtrc8bpo.css';
import '../../css/w/wernx2b0c.css';
import '../../css/c/c-aa9eqjn.css';
import '../../css/n/n5v6d8b_n.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o7o3n1bzz"/><path class="fhtrc8bpo"/><path clip-rule="evenodd" class="wernx2b0c"/><rect class="c-aa9eqjn"/><rect class="n5v6d8b_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:scooter"} {...others} />);
}

export default Component;
