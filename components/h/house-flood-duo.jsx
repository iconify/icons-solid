import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o0z66u04y.css';
import '../../css/p/ppta7nblo.css';
import '../../css/x/xqmsk0-rl.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o0z66u04y"/><path class="ppta7nblo"/><path class="xqmsk0-rl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:house-flood-duo"} {...others} />);
}

export default Component;
