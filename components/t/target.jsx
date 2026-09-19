import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jv4k-10ho.css';
import '../../css/p/pnbbm9bfl.css';
import '../../css/u/u819g2d_r.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="jv4k-10ho"/><path class="pnbbm9bfl"/><path class="u819g2d_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:target"} {...others} />);
}

export default Component;
