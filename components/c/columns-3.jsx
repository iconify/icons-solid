import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/i/i9ptl6b7t.css';
import '../../css/t/txd1p9bsj.css';
import '../../css/u/uqgtd6bue.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="gopnm44um"><rect class="i9ptl6b7t"/><rect class="txd1p9bsj"/><rect class="uqgtd6bue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:columns-3"} {...others} />);
}

export default Component;
