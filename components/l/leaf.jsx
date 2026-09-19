import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h62ykhuht.css';
import '../../css/n/ndi3unxmi.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="h62ykhuht"/><path class="ndi3unxmi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:leaf"} {...others} />);
}

export default Component;
