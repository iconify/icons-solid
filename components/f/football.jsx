import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/u5pzwml9t.css';
import '../../css/i/iieh6_xpy.css';
import '../../css/i/i4uh5terb.css';
import '../../css/i/ijfpbushk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="u5pzwml9t wm-shadow"/><path class="iieh6_xpy wm-shadow"/><path class="i4uh5terb"/><path class="ijfpbushk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:football"} {...others} />);
}

export default Component;
