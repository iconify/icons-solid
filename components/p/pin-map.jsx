import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oof0eec8d.css';
import '../../css/m/m0fm8jb3h.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="oof0eec8d"/><path class="m0fm8jb3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:pin-map"} {...others} />);
}

export default Component;
