import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y823xe55f.css';
import '../../css/w/wj2vs7q2e.css';
import '../../css/p/po8e2eb_g.css';

const viewBox = {"width":80,"height":81};
const content = `<g class="ft5dv1b6b"><path class="y823xe55f"/><path class="wj2vs7q2e"/><path class="po8e2eb_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:chart-line-1-bold"} {...others} />);
}

export default Component;
