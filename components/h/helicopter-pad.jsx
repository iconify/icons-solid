import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sx8b5qkom.css';
import '../../css/f/f_fp80b7a.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="sx8b5qkom"/><path class="f_fp80b7a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:helicopter-pad"} {...others} />);
}

export default Component;
