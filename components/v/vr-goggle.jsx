import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c27cg3h0f.css';
import '../../css/q/qc1xjs51x.css';
import '../../css/q/qv3vwabkc.css';
import '../../css/r/r94-0h_fj.css';

const viewBox = {"width":41,"height":41,"top":-0.5};
const content = `<g class="ft5dv1b6b"><path class="c27cg3h0f"/><path class="qc1xjs51x"/><path class="qv3vwabkc"/><path class="r94-0h_fj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:vr-goggle"} {...others} />);
}

export default Component;
