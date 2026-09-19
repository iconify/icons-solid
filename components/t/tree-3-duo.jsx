import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j50u55b2l.css';
import '../../css/w/wvns4ab7f.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="j50u55b2l"/><path class="wvns4ab7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tree-3-duo"} {...others} />);
}

export default Component;
