import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/afz1rpb0s.css';
import '../../css/a/au4h7xemr.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="afz1rpb0s"/><path class="au4h7xemr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:botl-milk"} {...others} />);
}

export default Component;
