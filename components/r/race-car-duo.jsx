import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ogpz_dbbw.css';
import '../../css/n/nkh_n2brk.css';
import '../../css/n/nyd6s9b3c.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ogpz_dbbw"/><path class="nkh_n2brk"/><path class="nyd6s9b3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:race-car-duo"} {...others} />);
}

export default Component;
