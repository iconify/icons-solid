import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uj97p-b6g.css';
import '../../css/b/b7j5l8r0t.css';
import '../../css/a/abvn24pzd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="uj97p-b6g"/><path clip-rule="evenodd" class="b7j5l8r0t"/><path class="abvn24pzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:film-bold"} {...others} />);
}

export default Component;
