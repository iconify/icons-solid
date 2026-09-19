import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vplktbc-t.css';
import '../../css/y/y0i8unb4p.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="vplktbc-t"/><path class="y0i8unb4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:pin-location"} {...others} />);
}

export default Component;
