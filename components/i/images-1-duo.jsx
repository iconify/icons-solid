import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itpf4vaap.css';
import '../../css/u/u83362buw.css';
import '../../css/y/yqth5dm5u.css';
import '../../css/m/mo2xx6bpc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="itpf4vaap"/><path class="u83362buw"/><path class="yqth5dm5u"/><path class="mo2xx6bpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:images-1-duo"} {...others} />);
}

export default Component;
