import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xdza6nhsc.css';
import '../../css/h/h0nqr5iym.css';
import '../../css/d/dwazowq7g.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="xdza6nhsc"/><path class="h0nqr5iym"/><path class="dwazowq7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:grin-beam-sweat-duo"} {...others} />);
}

export default Component;
