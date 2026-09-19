import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d4gttkb5z.css';
import '../../css/p/px4c0dbsn.css';
import '../../css/f/fbpyyfbwu.css';
import '../../css/b/bg2yi7zyc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="d4gttkb5z"/><path class="px4c0dbsn"/><path class="fbpyyfbwu"/><path class="bg2yi7zyc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:sort-numeric-down"} {...others} />);
}

export default Component;
