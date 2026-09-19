import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vdlu31boo.css';
import '../../css/i/i_i594b1y.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="vdlu31boo"/><path class="i_i594b1y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:clipboard"} {...others} />);
}

export default Component;
