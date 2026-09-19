import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rdjav62ki.css';
import '../../css/x/xv7bhzb5w.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="rdjav62ki"/><path class="xv7bhzb5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:bubble-chat"} {...others} />);
}

export default Component;
