import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hw618cd0p.css';
import '../../css/w/wby7ckorz.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="hw618cd0p"/><path class="wby7ckorz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:button-sale"} {...others} />);
}

export default Component;
