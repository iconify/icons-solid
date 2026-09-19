import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b8iq72bsm.css';
import '../../css/d/dtfkgbc7m.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="b8iq72bsm"/><path class="dtfkgbc7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrow-long-duo"} {...others} />);
}

export default Component;
