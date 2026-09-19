import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pz25ib40m.css';
import '../../css/v/vrup1skko.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="pz25ib40m"/><path class="vrup1skko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrows-expand-quad-duo"} {...others} />);
}

export default Component;
