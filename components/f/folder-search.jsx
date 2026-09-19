import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lhqj5vb6u.css';
import '../../css/p/pfijgcd8z.css';
import '../../css/i/imeoqsh9e.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="lhqj5vb6u"/><path class="pfijgcd8z"/><path class="imeoqsh9e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:folder-search"} {...others} />);
}

export default Component;
