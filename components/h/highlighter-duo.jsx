import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nr7kg5b3t.css';
import '../../css/q/qxv2_z-lb.css';
import '../../css/e/esm1jccio.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="nr7kg5b3t"/><path class="qxv2_z-lb"/><path class="esm1jccio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:highlighter-duo"} {...others} />);
}

export default Component;
