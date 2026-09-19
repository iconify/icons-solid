import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rtjruho2j.css';
import '../../css/p/p8ie1g_3o.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="rtjruho2j"/><path class="p8ie1g_3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:print"} {...others} />);
}

export default Component;
