import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p_3hnybns.css';
import '../../css/i/ip_dwfb1g.css';
import '../../css/m/mrawmjblw.css';

const viewBox = {"width":17,"height":16};
const content = `<g transform="translate(4)" class="n1lsf0bnc"><ellipse class="p_3hnybns"/><path class="ip_dwfb1g"/><ellipse class="mrawmjblw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:louder-2"} {...others} />);
}

export default Component;
