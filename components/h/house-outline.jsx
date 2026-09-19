import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f5k9ujbll.css';
import '../../css/d/dj61l2blf.css';
import '../../css/s/s2qm3rbjc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f5k9ujbll"/><path clip-rule="evenodd" class="dj61l2blf"/><path class="s2qm3rbjc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:house-outline"} {...others} />);
}

export default Component;
