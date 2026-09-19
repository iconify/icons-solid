import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dfw8yccuq.css';
import '../../css/y/yo558tb2l.css';
import '../../css/u/uvrn814xz.css';
import '../../css/c/cbpai7bsx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="dfw8yccuq"/><path clip-rule="evenodd" class="yo558tb2l"/><path class="uvrn814xz"/><path clip-rule="evenodd" class="cbpai7bsx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:head-side-mask-outline"} {...others} />);
}

export default Component;
