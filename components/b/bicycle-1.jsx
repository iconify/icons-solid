import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nu5xqlbrc.css';
import '../../css/h/hqvw7kbrn.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="nu5xqlbrc"/><path class="hqvw7kbrn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:bicycle-1"} {...others} />);
}

export default Component;
