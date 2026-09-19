import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hfwnmeb5w.css';
import '../../css/x/xq5oigb8v.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="hfwnmeb5w"/><path class="xq5oigb8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:person-remove"} {...others} />);
}

export default Component;
