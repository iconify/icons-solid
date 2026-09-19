import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m_kb_-b3u.css';
import '../../css/g/g9dmxub3i.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="m_kb_-b3u"/><path class="g9dmxub3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:clipboard-checked"} {...others} />);
}

export default Component;
