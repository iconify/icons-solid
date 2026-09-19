import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u9b8kdn2z.css';
import '../../css/v/vpqn_7hdf.css';
import '../../css/l/lc-3a9m0i.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="u9b8kdn2z"/><path class="vpqn_7hdf"/><path class="lc-3a9m0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:paint-brush-duo"} {...others} />);
}

export default Component;
