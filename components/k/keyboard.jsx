import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xo-byvivj.css';
import '../../css/a/a5qjus6jt.css';
import '../../css/q/qdkjvlb1t.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xo-byvivj"/><rect class="a5qjus6jt"/><path class="qdkjvlb1t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:keyboard"} {...others} />);
}

export default Component;
