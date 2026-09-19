import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e5k9mhbdo.css';
import '../../css/o/ob8xw0bkr.css';
import '../../css/r/r3s12lbsu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="e5k9mhbdo"/><path class="ob8xw0bkr"/><path class="r3s12lbsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:female"} {...others} />);
}

export default Component;
