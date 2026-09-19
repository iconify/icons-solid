import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kupkbm0sm.css';
import '../../css/s/sgs5pgp6p.css';
import '../../css/i/ihy1gojel.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kupkbm0sm"/><path clip-rule="evenodd" class="sgs5pgp6p"/><path class="ihy1gojel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:layer-foward"} {...others} />);
}

export default Component;
