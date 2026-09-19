import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/csqmazbuo.css';
import '../../css/o/ogfn4ih6o.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="csqmazbuo"/><path class="ogfn4ih6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:inbox-upload"} {...others} />);
}

export default Component;
