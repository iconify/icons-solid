import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b8o27mgml.css';
import '../../css/o/of-k99bvu.css';
import '../../css/m/mzbt9lmsw.css';
import '../../css/n/nf6pszb-h.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="b8o27mgml"/><path class="of-k99bvu"/><path clip-rule="evenodd" class="mzbt9lmsw"/><path class="nf6pszb-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:repeat-once-outline"} {...others} />);
}

export default Component;
